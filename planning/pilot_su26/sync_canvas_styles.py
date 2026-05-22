#!/usr/bin/env python3
"""Sync canvas-shared-styles.css into every week-*/canvas-page.html.

Canvas strips external stylesheets when HTML is pasted into its editor, so
the CSS has to live inline in each week's overview page. To prevent drift
across weeks, this script writes the canonical CSS into a marked block
inside each canvas-page.html.

Marker convention (CSS comments, inside the <style> block):

    /* BEGIN CANVAS_STYLES */
    ...replaced by canvas-shared-styles.css...
    /* END CANVAS_STYLES */

Files without markers are skipped with a warning. Re-run after editing the
shared CSS, then commit the .css and any updated .html files together.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
CSS_PATH = HERE / "canvas-shared-styles.css"
HTML_GLOB = "week-*/canvas-page.html"

START = "/* BEGIN CANVAS_STYLES */"
END = "/* END CANVAS_STYLES */"


def main() -> int:
    if not CSS_PATH.exists():
        print(f"ERROR: {CSS_PATH} not found", file=sys.stderr)
        return 1

    raw_css = CSS_PATH.read_text().rstrip()
    indent = "        "  # 8 spaces — matches `    <style>` block at depth 2
    css_body = "\n".join(indent + line if line else "" for line in raw_css.split("\n"))
    pattern = re.compile(re.escape(START) + ".*?" + re.escape(END), re.DOTALL)

    html_files = sorted(HERE.glob(HTML_GLOB))
    if not html_files:
        print(f"WARN: no files matched {HERE}/{HTML_GLOB}", file=sys.stderr)
        return 0

    updated = unchanged = skipped = 0
    for html in html_files:
        text = html.read_text()
        if START not in text or END not in text:
            print(f"skip   {html.relative_to(HERE.parent)} (missing markers)")
            skipped += 1
            continue
        new = pattern.sub(f"{START}\n{css_body}\n{indent}{END}", text)
        if new != text:
            html.write_text(new)
            print(f"update {html.relative_to(HERE.parent)}")
            updated += 1
        else:
            print(f"ok     {html.relative_to(HERE.parent)}")
            unchanged += 1

    print(f"\n{updated} updated, {unchanged} unchanged, {skipped} skipped")
    return 0


if __name__ == "__main__":
    sys.exit(main())

# Share images

The link previews (Open Graph and Twitter cards) for sections that have their own image.
Each is 1200 x 630: the logo, a headline and a line of copy on the light panel, and one line
drawing from the shared illustration library on deep navy.

| Image | Drawing | Pages |
|---|---|---|
| `og-professional-v1.png` | briefcase | `/professional` and every page under it |
| `og-use-cases-v1.png` | house | `/customer/use-cases` |
| `og-security-v1.png` | strongbox | `/security` |

Every other page uses `og-image-v4.png`, the pocket watch, made with the logo kit.
`apps/web/src/pageMeta.ts` decides which page gets which image.

## Regenerating

```
node make_share_images.mjs
```

It needs Node 22+, Chrome, `apps/web/node_modules` (for Inter) and the illustration
library checked out next to this repo (`../illustrations`), and it writes the PNGs into
`apps/web/public/`. Files in `public/` are cached for a year, so a changed image needs a
new `-vN` name, in the script and in `pageMeta.ts`.

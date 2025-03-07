# Landing Page from yaml

Minimal landing page fed from a [yaml config](content.yaml). Forked and modified from [flexdinesh/dev-landing-page](https://github.com/flexdinesh/dev-landing-page).

## Usage

### Github pages

1. Fork this repo with the name `{username}.github.io`
1. Change the content in [content.yaml](content.yaml)
1. Set the correct branch in [.github/workflows/gh-pages.yml](.github/workflows/gh-pages.yml#L5)
1. Push to github
1. Your site should be live at `https://{username}.github.io`

### Custom Domain

1. Fork this repo
1. Setup the correct CNAME or IP adress as per [Surge.sh: Adding a custom domain](https://surge.sh/help/adding-a-custom-domain)
1. Change the content in [content.yaml](content.yaml)
1. Set the correct branch in [.github/workflows/surge.yml](.github/workflows/surge.yml#L5)
1. Set the correct CNAME in [.github/workflows/surge.yml](.github/workflows/surge.yml#L19)
1. Set surge.sh credentials [`SURGE_TOKEN` and `SURGE_LOGIN` as action secrets](.github/workflows/surge.yml#L23)
1. Push to github
1. Your site should be live at the url entered above

If you want to make your new landing page available via github see [setting up a custom domain](https://help.github.com/articles/quick-start-setting-up-a-custom-domain/).

## Themes

Landing Page comes in 9 **material themes**.

![9 Material Themes](https://image.ibb.co/jJVKCn/dev_landing_page_themes.jpg)

If none of these themes fit within your taste, it's quite easy to customize and create your own too.

## Development

Uses

-   [asdf](https//asdf-vm.com)

```bash
# Install asdf dependencies
bash ./scripts/asdf-install.sh

# Install dependencies
npm install

# Start dev server
npm run dev
```

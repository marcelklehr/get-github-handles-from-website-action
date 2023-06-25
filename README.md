# Get Github handles from website action

This action returns the user names of all Github users linked on the passed website

## Inputs

### `website`

**Required** The website to scrape.

## Outputs

### `users`

The users as a comma-separated string.

## Example usage

```yaml
uses: marcelklehr/get-github-handles-from-website-action@main
with:
  website: 'https://nextcloud.com/team/'
```


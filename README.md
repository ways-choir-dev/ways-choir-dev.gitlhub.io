# WAYS-website-2.0

Neue Website des Gospel-Soul-Pop-Chors WAYS - WithAllYourSenses

## start page locally

call:

    hugo serve
    
and open in web browser:

    http://localhost:1313

### Contact form

You can optionally create a contact page and include a contact form.

A contact page is just like a regular Hugo page. But it must include the field `id` with the value `contact`.

```toml
+++
title = "Contact"
id = "contact"
+++
```

For the open street map widget defining latitude and longitude in the section `params` at `config.toml`:

```yaml
[params]
    ...
    latitude = "-12.043333"
    longitude = "-77.028333"
```

Since this Hugo sites are static, the contact form uses [Formspree](https://formspree.io/) as a proxy. 
The form makes a POST request to their servers to send the actual email. 
Visitors can send up to a 1000 emails each month for free.

To enable the form in the contact page, just type your Formspree email in the `config.toml` file.

```yaml
[params]
email = "your@email.com"
```

# Newsletter

Occasionally we send a newsletter to our members.

## Sending newsletter

### Creating campaign

Create campaign on [Mailtrain](https://mailtrain.trustroots.org). It's the app we use for sending newsletters.

### Updating subscribers on Mailtrain

Mailtrain's list and users on the site are not synchronised. Therefore you need to manually update the list each time you want to send out a campaign.

Generate the list on the production server:

```bash
NODE_ENV=production node bin/export-newsletter-subscribers.js ~/tr-emails-2020-12-24.csv
```

Copy csv file to your computer:

```bash
scp YOUR_USERNAME@trustroots.org:/home/YOUR_USERNAME/tr-emails-2020-12-24.csv ~/local-folder
```

Go to importing tool in Mailtrain (_Lists → Trustroots Newsletter → Imports_) and create a new import with the file. It doesn't matter if the csv file has some existing emails — Mailtrain's import will ignore those.

You can see from import "status" page in case the import failed due failed formatting on the file. If so, manually edit your file and consider adjusting the export script to deal with the case.

Remember to delete both files after you don't need them anymore. Especially the local one.

### Rollout

Test the campaign first by sending it to a small, internal test list. Once that works out, do the full-rollout on the main list.

Sending emails is throttled across long enough time. That's so that email providers like Gmail don't flag us for spam when they see a sudden surge of mass email coming out from our servers. Therefore it can take little while before the whole list is processed. Our throttle is currently (2020/12) 400 emails per hour. This can be adjusted from _Send configurations_. [Read more about sender reputation](https://www.sparkpost.com/resources/email-explained/email-sender-reputation/).

Consider also creating a blog and social media material from the newsletter.
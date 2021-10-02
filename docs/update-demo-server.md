# OHN Demo Server Update
OHN is running a demo server on a recent commit of the `master` branch at https://demo.openhospitality.network. This document describes the process of updating to the current commit.

1. Login with `ssh dsterry@demo.openhospitality.network`. We use public key auth for login so if login doesn't work, please [make an issue](https://github.com/OpenHospitalityNetwork/fedi-trustroots/issues/new) and a team member will get in touch with you.
2. `cd /var/www/o4.davidsterry.com/ft`
3. `git pull`

After this the two servers should reload and within a few minutes of webpack compiling, the updated code will be live.

## Troubleshooting

If there's any problem, run `sd` to reattach to the tmux session running the two server processes. There you can use `Ctrl-space + n` to cycle through the tmux windows and see which one has a problem.

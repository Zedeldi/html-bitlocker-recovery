# html-bitlocker-recovery

[![GitHub license](https://img.shields.io/github/license/Zedeldi/html-bitlocker-recovery?style=flat-square)](https://github.com/Zedeldi/html-bitlocker-recovery/blob/main/LICENSE) [![GitHub last commit](https://img.shields.io/github/last-commit/Zedeldi/html-bitlocker-recovery?style=flat-square)](https://github.com/Zedeldi/html-bitlocker-recovery/commits)

Static web page clone of BitLocker recovery screen.

## Description

Emulate appearance and behaviour of BitLocker recovery screen, in a static web page.

`mousedown`, `contextmenu` and `keydown` events are captured, to prevent
default browser behaviour which would not be present in a pre-boot environment.

The cursor and scrollbars are also hidden.

Both number and function keys can be used to input the recovery key.

The key ID is generated with `crypto.randomUUID().toUpperCase()`.
If required, this could be fetched from a backend, implementing the logic
to obtain the correct key ID.

Likewise, the entered recovery key could be sent to a backend to unlock the volume.

## Credits

- [Segoe UI](https://learn.microsoft.com/en-us/typography/font-list/segoe-ui) - font family

## License

`html-bitlocker-recovery` is licensed under the [MIT Licence](https://mit-license.org/)
for everyone to use, modify and share freely.

This project is distributed in the hope that it will be useful, but without any
warranty.

## Donate

If you found this project useful, please consider donating.
Any amount is greatly appreciated! Thank you :smiley:

[![PayPal](https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-150px.png)](https://paypal.me/ZackDidcott)

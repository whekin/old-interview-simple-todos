warning: LF will be replaced by CRLF in package-lock.json.
The file will have its original line endings in your working directory.
[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex 92fa69c..0200fb7 100644[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -3,6 +3,74 @@[m
   "requires": true,[m
   "lockfileVersion": 1,[m
   "dependencies": {[m
[32m+[m[32m    "@babel/code-frame": {[m
[32m+[m[32m      "version": "7.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-OfC2uemaknXr87bdLUkWog7nYuliM9Ij5HUcajsVcMCpQrcLmtxRbVFTIqmcSkSeYRBFBRxs2FiUqFJDLdiebA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/highlight": "^7.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "@babel/generator": {[m
[32m+[m[32m      "version": "7.1.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.1.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-brwPBtVvdYdGxtenbQgfCdDPmtkmUBZPjUoK5SXJEBuHaA5BCubh9ly65fzXz7R6o5rA76Rs22ES8Z+HCc0YIQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/types": "^7.1.6",[m
[32m+[m[32m        "jsesc": "^2.5.1",[m
[32m+[m[32m        "lodash": "^4.17.10",[m
[32m+[m[32m        "source-map": "^0.5.0",[m
[32m+[m[32m        "trim-right": "^1.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "@babel/helper-function-name": {[m
[32m+[m[32m      "version": "7.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-A95XEoCpb3TO+KZzJ4S/5uW5fNe26DjBGqf1o9ucyLyCmi1dXq/B3c8iaWTfBk3VvetUxl16e8tIrd5teOCfGw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/helper-get-function-arity": "^7.0.0",[m
[32m+[m[32m        "@babel/template": "^7.1.0",[m
[32m+[m[32m        "@babel/types": "^7.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "@babel/helper-get-function-arity": {[m
[32m+[m[32m      "version": "7.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-get-function-arity/-/helper-get-function-arity-7.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-r2DbJeg4svYvt3HOS74U4eWKsUAMRH01Z1ds1zx8KNTPtpTL5JAsdFv8BNyOpVqdFhHkkRDIg5B4AsxmkjAlmQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/types": "^7.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "@babel/helper-split-export-declaration": {[m
[32m+[m[32m      "version": "7.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-MXkOJqva62dfC0w85mEf/LucPPS/1+04nmmRMPEBUB++hiiThQ2zPtX/mEWQ3mtzCEjIJvPY8nuwxXtQeQwUag==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/types": "^7.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "@babel/highlight": {[m
[32m+[m[32m      "version": "7.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-UFMC4ZeFC48Tpvj7C8UgLvtkaUuovQX+5xNWrsIoMG8o2z+XFKjKaN9iVmS84dPwVN00W4wPmqvYoZF3EGAsfw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "chalk": "^2.0.0",[m
[32m+[m[32m        "esutils": "^2.0.2",[m
[32m+[m[32m        "js-tokens": "^4.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "@babel/parser": {[m
[32m+[m[32m      "version": "7.1.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.1.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-dWP6LJm9nKT6ALaa+bnL247GHHMWir3vSlZ2+IHgHgktZQx0L3Uvq2uAWcuzIe+fujRsYWBW2q622C5UvGK9iQ==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
     "@babel/runtime": {[m
       "version": "7.1.5",[m
       "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.1.5.tgz",[m
[36m@@ -11,11 +79,623 @@[m
         "regenerator-runtime": "^0.12.0"[m
       }[m
     },[m
[32m+[m[32m    "@babel/template": {[m
[32m+[m[32m      "version": "7.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-SY1MmplssORfFiLDcOETrW7fCLl+PavlwMh92rrGcikQaRq4iWPVH0MpwPpY3etVMx6RnDjXtr6VZYr/IbP/Ag==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/code-frame": "^7.0.0",[m
[32m+[m[32m        "@babel/parser": "^7.1.2",[m
[32m+[m[32m        "@babel/types": "^7.1.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "@babel/traverse": {[m
[32m+[m[32m      "version": "7.1.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.1.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-CXedit6GpISz3sC2k2FsGCUpOhUqKdyL0lqNrImQojagnUMXf8hex4AxYFRuMkNGcvJX5QAFGzB5WJQmSv8SiQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/code-frame": "^7.0.0",[m
[32m+[m[32m        "@babel/generator": "^7.1.6",[m
[32m+[m[32m        "@babel/helper-function-name": "^7.1.0",[m
[32m+[m[32m        "@babel/helper-split-export-declaration": "^7.0.0",[m
[32m+[m[32m        "@babel/parser": "^7.1.6",[m
[32m+[m[32m        "@babel/types": "^7.1.6",[m
[32m+[m[32m        "debug": "^4.1.0",[m
[32m+[m[32m        "globals": "^11.1.0",[m
[32m+[m[32m        "lodash": "^4.17.10"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "@babel/types": {[m
[32m+[m[32m      "version": "7.1.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.1.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-DMiUzlY9DSjVsOylJssxLHSgj6tWM9PRFJOGW/RaOglVOK9nzTxoOMfTfRQXGUCUQ/HmlG2efwC+XqUEJ5ay4w==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "esutils": "^2.0.2",[m
[32m+[m[32m        "lodash": "^4.17.10",[m
[32m+[m[32m        "to-fast-properties": "^2.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "acorn": {[m
[32m+[m[32m      "version": "6.0.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/acorn/-/acorn-6.0.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-VY4i5EKSKkofY2I+6QLTbTTN/UvEQPCo6eiwzzSaSWfpaDhOmStMCMod6wmuPciNq+XS0faCglFu2lHZpdHUtg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "acorn-jsx": {[m
[32m+[m[32m      "version": "5.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-XkB50fn0MURDyww9+UYL3c1yLbOBz0ZFvrdYlGB8l+Ije1oSC75qAqrzSPjYQbdnQUzhlUGNKuesryAv0gxZOg==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "ajv": {[m
[32m+[m[32m      "version": "6.5.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.5.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-7q7gtRQDJSyuEHjuVgHoUa2VuemFiCMrfQc9Tc08XTAc4Zj/5U1buQJ0HU6i7fKjXU09SVgSmxa4sLvuvS8Iyg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "fast-deep-equal": "^2.0.1",[m
[32m+[m[32m        "fast-json-stable-stringify": "^2.0.0",[m
[32m+[m[32m        "json-schema-traverse": "^0.4.1",[m
[32m+[m[32m        "uri-js": "^4.2.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "ansi-escapes": {[m
[32m+[m[32m      "version": "3.1.0",[m
[32m+[m[32m      "resolved": "http://registry.npmjs.org/ansi-escapes/-/ansi-escapes-3.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-UgAb8H9D41AQnu/PbWlCofQVcnV4Gs2bBJi9eZPxfU/hgglFh3SMDMENRIqdr7H6XFnXdoknctFByVsCOotTVw==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "ansi-regex": {[m
[32m+[m[32m      "version": "3.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "ansi-styles": {[m
[32m+[m[32m      "version": "3.2.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "color-convert": "^1.9.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "argparse": {[m
[32m+[m[32m      "version": "1.0.10",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",[m
[32m+[m[32m      "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "sprintf-js": "~1.0.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "babel-eslint": {[m
[32m+[m[32m      "version": "10.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/babel-eslint/-/babel-eslint-10.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-z7OT1iNV+TjOwHNLLyJk+HN+YVWX+CLE6fPD2SymJZOZQBs+QIexFjhm4keGTm8MW9xr4EC9Q0PbaLB24V5GoQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/code-frame": "^7.0.0",[m
[32m+[m[32m        "@babel/parser": "^7.0.0",[m
[32m+[m[32m        "@babel/traverse": "^7.0.0",[m
[32m+[m[32m        "@babel/types": "^7.0.0",[m
[32m+[m[32m        "eslint-scope": "3.7.1",[m
[32m+[m[32m        "eslint-visitor-keys": "^1.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "eslint-scope": {[m
[32m+[m[32m          "version": "3.7.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-3.7.1.tgz",[m
[32m+[m[32m          "integrity": "sha1-PWPD7f2gLgbgGkUq2IyqzHzctug=",[m
[32m+[m[32m          "dev": true,[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "esrecurse": "^4.1.0",[m
[32m+[m[32m            "estraverse": "^4.1.1"[m
[32m+[m[32m          }[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "balanced-match": {[m
[32m+[m[32m      "version": "1.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "brace-expansion": {[m
[32m+[m[32m      "version": "1.1.11",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",[m
[32m+[m[32m      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "balanced-match": "^1.0.0",[m
[32m+[m[32m        "concat-map": "0.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "caller-path": {[m
[32m+[m[32m      "version": "0.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/caller-path/-/caller-path-0.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-lAhe9jWB7NPaqSREqP6U6CV3dR8=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "callsites": "^0.2.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "callsites": {[m
[32m+[m[32m      "version": "0.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/callsites/-/callsites-0.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-r6uWJikQp/M8GaV3WCXGnzTjUMo=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "chalk": {[m
[32m+[m[32m      "version": "2.4.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-ObN6h1v2fTJSmUXoS3nMQ92LbDK9be4TV+6G+omQlGJFdcUX5heKi1LZ1YnRMIgwTLEj3E24bT6tYni50rlCfQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "ansi-styles": "^3.2.1",[m
[32m+[m[32m        "escape-string-regexp": "^1.0.5",[m
[32m+[m[32m        "supports-color": "^5.3.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "chardet": {[m
[32m+[m[32m      "version": "0.7.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/chardet/-/chardet-0.7.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "circular-json": {[m
[32m+[m[32m      "version": "0.3.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/circular-json/-/circular-json-0.3.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-UZK3NBx2Mca+b5LsG7bY183pHWt5Y1xts4P3Pz7ENTwGVnJOUWbRb3ocjvX7hx9tq/yTAdclXm9sZ38gNuem4A==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "cli-cursor": {[m
[32m+[m[32m      "version": "2.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-2.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-s12sN2R5+sw+lHR9QdDQ9SOP/LU=",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "restore-cursor": "^2.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "cli-width": {[m
[32m+[m[32m      "version": "2.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/cli-width/-/cli-width-2.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha1-/xnt6Kml5XkyQUewwR8PvLq+1jk=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "color-convert": {[m
[32m+[m[32m      "version": "1.9.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "color-name": "1.1.3"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "color-name": {[m
[32m+[m[32m      "version": "1.1.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",[m
[32m+[m[32m      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "concat-map": {[m
[32m+[m[32m      "version": "0.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "confusing-browser-globals": {[m
[32m+[m[32m      "version": "1.0.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/confusing-browser-globals/-/confusing-browser-globals-1.0.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-tHo1tQL/9Ox5RELbkCAJhnViqWlzBz3MG1bB2czbHjH2mWd4aYUgNCNLfysFL7c4LoDws7pjg2tj48Gmpw4QHA==",[m
[32m+[m[32m      "dev": true[m
[32m+[m[32m    },[m
[32m+[m[32m    "cross-spawn": {[m
[32m+[m[32m      "version": "6.0.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/cros
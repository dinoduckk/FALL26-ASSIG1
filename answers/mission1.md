# Mission 1: Python habits that break JavaScript security

## Evidence

Output of `npm run test:m1`, pasted or as a screenshot in `img/`:

```
PS C:\Users\brian\FALL26-ASSIG1> npm run test:m1

> cyse411-assignment1-secure-status-portal@1.0.0 test:m1
> node tests/mission1.test.js


normalizeService()
  FAIL  valid entry is normalized and the name is trimmed
        Expected values to be strictly deep-equal:
  PASS  returns a NEW object, not the same reference
  FAIL  extra fields such as isAdmin are dropped
        Expected values to be strictly deep-equal:
  FAIL  null is rejected
        Cannot read properties of null (reading 'name')
  PASS  an array is rejected
  PASS  a string is rejected
  PASS  blank name is rejected
  PASS  name longer than 64 chars is rejected
  PASS  name that is not a string is rejected
  PASS  status 'UP' is rejected (case matters)
  PASS  unknown status is rejected
  PASS  online: "false" (string) is rejected
  PASS  online: 0 is rejected
  FAIL  online: false (boolean) is accepted
        Cannot read properties of null (reading 'online')
  PASS  latencyMs: "120" (string) is rejected
  PASS  negative latency is rejected
  PASS  Infinity latency is rejected
  FAIL  latencyMs: 0 is accepted (0 is falsy but valid!)
        Cannot read properties of null (reading 'latencyMs')
  PASS  missing latencyMs is rejected

parseStatusReport()
  FAIL  invalid JSON fails safe
        Expected values to be strictly deep-equal:
  FAIL  missing services array fails safe
        Expected values to be strictly deep-equal:
  FAIL  services that is not an array fails safe
        Expected values to be strictly deep-equal:
  FAIL  JSON null fails safe
        Expected values to be strictly deep-equal:
  FAIL  mixed report keeps valid entries and counts rejected ones
        Cannot read properties of undefined (reading 'error')

14 passed, 10 failed
```

## Connections: Python to JavaScript

For each check you implemented, write how you would do it in Python and how you did it in JavaScript.

| Rule | Python | JavaScript, as in my code |
|---|---|---|
| raw is a dictionary or object, not a list | `isinstance(raw, dict)` | |
| name is a non-empty string after trimming | | |
| status is one of the allowed values | | |
| online is a real boolean | | |
| latencyMs is a finite number ≥ 0 | | |
| invalid JSON does not crash the program | | |

## Questions

1. Why is `latencyMs: 0` a trap for code such as `if (!raw.latencyMs) return null;`?

   > Because it could be interpreted as a boolean instead of a number.

2. Your function builds a **new** object and ignores fields like `isAdmin`. Describe in two or three sentences what could go wrong later in an application that copied **every** field it received.

   > Someone could add in a field such as isAdmin that could give them access to edit the rest of the application

## Documentation log

| Page I used, with URL | One thing I learned from it |
|---|---|
| | |

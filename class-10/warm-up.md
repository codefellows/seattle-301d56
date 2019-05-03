# Warm-Up Exercise
This code sample is written in Python. Read through the code and determine the output for this function.

```
def search(source: list, key: int) -> int:
    start = 0
    end = len(source) - 1

    while abs(start - end) > 1:
        mid = abs(start + end) // 2

        if key == source[mid]:
            return mid

        if key > source[mid]:
            start = mid + 1

        if key < source[mid]:
            end = mid - 1

    return -1
```

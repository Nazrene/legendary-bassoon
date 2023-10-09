# Speed Detector (Toy Problem) - README

## Description

This JavaScript program, "Speed Detector," takes the speed of a car as input and provides feedback based on the speed and demerit points. It helps determine if a driver receives demerit points or if their license is suspended.

## Features

- Accepts the speed of a car as input.
- Checks if the speed is within the legal limit (70 km/s).
- Calculates demerit points based on the excess speed (5 km/s per demerit point).
- Prints the result, which can be one of the following:
  - "Ok" if the speed is within the limit.
  - "Points: X" if the driver receives demerit points (X is the number of points).
  - "License suspended" if the driver accumulates more than 12 demerit points.

## Example

- Input speed: 60 km/s

Output: "Ok"

- Input speed: 80 km/s

Output: "Points: 2"

- Input speed: 100 km/s

Output: "License suspended"
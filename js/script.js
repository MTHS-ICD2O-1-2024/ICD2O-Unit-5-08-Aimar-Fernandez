// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  let answer = 0
  let firstInput = parseInt(document.getElementById("first-input").value)
  const secondInput = parseInt(document.getElementById("second-input").value)
  while (true) {
    if (firstInput < secondInput) {
      break
    }
    firstInput -= secondInput
    answer++
  }
  document.getElementById("answer").innerHTML = 
    "<p>The answer is: " + answer + "<br />The remainder is: " + firstInput + "</p>"
}

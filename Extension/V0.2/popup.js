// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Store CSS data in the "local" storage area.
//
// See note in options.js for rationale on why not to use "sync".
window.setTimeout(launchHangout, 1000);

function launchHangout() {
	var netflix = window.open("https://plus.google.com/hangouts/_/yrxui6qyxnhqvgzy3sdhpc5tqae","_parent","height=window.height-100");
	netflix.onLoad = function(){openHangout()};
}

function openHangout() {
	window.open("https://plus.google.com/hangouts/_/yrxui6qyxnhqvgzy3sdhpc5tqae","_parent","height=window.height-100");
}


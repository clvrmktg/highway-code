+++
title = "{{ replace .Name "-" " " | title }}"
type = "page"                # layouts/page/*
summary = "One-line page summary."
description = "2–3 sentence meta description."
icon = "info-circle"
weight = 10
tags = []

draft = true
date = {{ .Date }}
+++

## Heading
Page content goes here.

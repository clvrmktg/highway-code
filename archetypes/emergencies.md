+++
title = "{{ replace .Name "-" " " | title }}"
type = "emergencies"           # layouts/emergency/*
summary = "Immediate actions in one line."
description = "Short, calm, step-by-step guidance for the situation."
icon = "alert-triangle"
weight = 10
tags = ["emergency", "first-aid"]

draft = true
date = {{ .Date }}
+++

## What to do first (DR ABC)
{{< checklist >}}
- Danger: check it’s safe to help.
- Response: check if the person responds.
- Airway, Breathing, Circulation.
{{< /checklist >}}

## Call for help
Numbers, info to provide.

## Do not
- Common mistakes to avoid.

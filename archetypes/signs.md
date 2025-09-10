+++
title = "{{ replace .Name "-" " " | title }}"
type = "sign"                # layouts/sign/*
category = "regulatory"      # regulatory | warning | information | marking
code = ""                    # e.g., R1-1, W2-3 (optional)
summary = "Short meaning in one line."
description = "Full explanation of what the sign/marking means and how to respond."
icon = "traffic-cone"        # Tabler icon for list cards
weight = 10
tags = ["signs"]

# Assets (choose one)
svg = "/images/signs/{{ .Name }}.svg"
image = "/images/signs/{{ .Name }}.png"

# Related rules (slugs) to cross-link
related_rules = ["speed", "overtaking"]

draft = true
date = {{ .Date }}
+++

## What it means
Explain clearly.

## What you MUST / MUST NOT do
{{< checklist >}}
- Action 1
- Action 2
{{< /checklist >}}

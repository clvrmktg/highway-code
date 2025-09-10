+++
title = "{{ replace .Name "-" " " | title }}"
type = "guide"               # layouts/guide/*
audience = "children"        # children | visitors
reading_level = "easy-read"  # easy-read | standard
summary = "Very short promise for the audience."
description = "2–3 sentence intro written for this audience."
icon = "user"
weight = 10
tags = ["guide"]

draft = true
date = {{ .Date }}
+++

## Key points
{{< checklist >}}
- Short, simple rule 1.
- Short, simple rule 2.
{{< /checklist >}}

{{< callout type="tip" title="Helpful to remember" >}}
Mnemonic or picture cue.
{{< /callout >}}

+++
title = "{{ replace .Name "-" " " | title }}"
type = "law"                 # layouts/law/*
summary = "One-line summary of the legal topic."
description = "2–3 sentence overview for SEO and clarity."
icon = "scale"               # Tabler icon
weight = 10
tags = ["law", "compliance"]

# Optional structured refs
# statutes = ["Road Traffic Act (Ch. 220) s.XX"]
# forms = ["/downloads/form-xyz.pdf"]

draft = true
date = {{ .Date }}
+++

## Overview
Plain-language explanation.

{{< callout type="warning" title="Legal Notice" >}}
This section summarizes the law. The Act and Regulations prevail.
{{< /callout >}}

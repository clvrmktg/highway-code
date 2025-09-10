+++
# ───────────────────────────────────────────────────────────────
# EDIT THESE PER PAGE (frequent)
# ───────────────────────────────────────────────────────────────

title = "{{ replace .Name "-" " " | title }}"   # Human title (shown on page)
summary = "One-line summary for quick scanning." # Short lead, ~140 chars max
description = "2–3 sentence description for SEO/social cards and on-page intro."

# Visual / classification
icon = "gauge"                                  # Tabler icon name (e.g., gauge, traffic-cone, road)
tags = ["drivers", "safety"]                     # Taxonomy filters
weight = 10                                      # Order within lists (lower = earlier)
aliases = []                                     # Optional old URLs to redirect

# Cross-references (optional)
# related_laws = ["Road Traffic Act, Ch. 220, s.XX"]
# penalties = ["Speeding: fine $XXX; points: X"]

# Inline exam practice (optional; repeat [[exam]] blocks)
# [[exam]]
# id = "rule-1"
# question = "Sample multiple-choice question?"
# options = ["Option A", "Option B", "Option C", "Option D"]
# answer = "Option B"
# explanation = "Why this is correct, and why the others are not."

# ───────────────────────────────────────────────────────────────
# RARELY CHANGE / SYSTEM FIELDS
# ───────────────────────────────────────────────────────────────

type = "rule"          # forces use of layouts/rule/*
section = "Rules"      # helps breadcrumbs / nav labels (optional, but nice)
draft = true           # flip to false when ready to publish

date = {{ .Date }}     # created date


+++

## Overview

Briefly explain the rule in plain language.  
Keep sentences short and direct.

{{< checklist >}}
- First key action to follow.
- Second key action to follow.
- Third key action to follow.
{{< /checklist >}}

{{< callout type="warning" title="You MUST / MUST NOT" >}}
Highlight mandatory legal requirements here.
{{< /callout >}}

{{< callout type="tip" title="Exam Tip" >}}
Phrase the key idea as it might appear in the written exam.
{{< /callout >}}

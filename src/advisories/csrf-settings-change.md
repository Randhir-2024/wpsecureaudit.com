---
layout: "layouts/advisory.html"
title: "CSRF to Settings Change"
cve: "WPSA-24-079"
severity: "Medium"
vuln_type: "Cross-Site Request Forgery (CSRF)"
date: 2026-07-15T12:00:00Z
description: "A lack of nonce verification on settings update allows attackers to forge state-changing actions if an administrator is logged in."
remediation: "Upgrade the settings handler plugin, or add check_admin_referer() nonces."
---
Complete details of the vulnerability report: **CSRF to Settings Change** (WPSA-24-079). Under our coordinated disclosure guidelines, remediation should be prioritized according to risk rating.

---
layout: "layouts/advisory.html"
title: "SQL Injection in Custom Ajax Plugin"
vuln_type: "SQL Injection (SQLi)"
severity: "Critical"
cve: "CVE-2026-99999"
date: 2026-08-08T12:00:00Z
description: "An unauthenticated SQL injection vulnerability was found in the custom AJAX endpoints of the theme. This could allow attackers to dump sensitive database logs."
remediation: "Upgrade the custom plugin to version 1.2.1, or sanitize the AJAX ID input parameter using absint() or prepare() database statements."
---
This is the body of the advisory. The vulnerability resides in `wp-content/plugins/custom-ajax/custom-ajax.php` where user input is directly concatenated into a SQL query.

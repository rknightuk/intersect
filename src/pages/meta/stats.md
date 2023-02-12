---
title: Stats
templateEngineOverride: 'njk,md'
---

## Topics

{% set navPages = collections.pages.data | eleventyNavigation %}

- {{ navPages.length }} topics
- {{ collections.pages.data.length }} pages

## Links

- {{ collections.linkData.links.length }} links
- {{ collections.linkData.charts.length }} unique sites

### Top 25 Linked Sites

<style>
.stats-table-cell {
    vertical-align: middle;
}

.stats-table-external {
    float: right;
    margin-left: 10px;
}

.stats-table-external svg {
    width:15px;
    height:15px;
}
</style>

<table>
  <thead>
    <th>Site</th>
    <th>Links</th>
  </thead>
  <tbody>
    {%- for domain in collections.linkData.charts.splice(0, 25) -%}
      <tr>
        <td class="stats-table-cell"><a class="domain-search" href="https://{{ domain.domain }}" target="_blank" rel="noopener">{{ domain.domain }}</a>
        <a class="stats-table-external" href="https://{{ domain.domain }}" target="_blank" rel="noopener"><svg><use xlink:href="#external"></use></svg></a>
      </td>
      <td style="text-align: center;">
        {{ domain.count }}
      </td>
      </tr>
    {% endfor %}
  </tbody>
</table>

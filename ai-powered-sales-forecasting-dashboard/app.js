const SAMPLE_DATA = `date,region,category,revenue,orders,profit
2024-01-01,North,Software,14200,96,5112
2024-01-01,South,Hardware,9800,61,2352
2024-01-01,East,Services,12100,72,3993
2024-01-01,West,Software,10800,67,3780
2024-02-01,North,Hardware,10600,63,2544
2024-02-01,South,Services,12800,76,4224
2024-02-01,East,Software,15100,101,5436
2024-02-01,West,Hardware,9300,58,2232
2024-03-01,North,Services,13900,79,4587
2024-03-01,South,Software,16200,104,5832
2024-03-01,East,Hardware,11200,69,2688
2024-03-01,West,Services,11700,71,3861
2024-04-01,North,Software,17100,110,6156
2024-04-01,South,Hardware,11900,70,2856
2024-04-01,East,Services,13600,80,4488
2024-04-01,West,Software,12600,77,4410
2024-05-01,North,Hardware,12400,73,2976
2024-05-01,South,Services,14500,85,4785
2024-05-01,East,Software,17800,115,6408
2024-05-01,West,Hardware,10100,64,2424
2024-06-01,North,Services,15100,88,4983
2024-06-01,South,Software,18400,121,6624
2024-06-01,East,Hardware,12900,76,3096
2024-06-01,West,Services,13200,82,4356
2024-07-01,North,Software,19100,126,6876
2024-07-01,South,Hardware,13500,79,3240
2024-07-01,East,Services,15800,92,5214
2024-07-01,West,Software,14400,87,5040
2024-08-01,North,Hardware,13900,83,3336
2024-08-01,South,Services,16300,96,5379
2024-08-01,East,Software,20300,132,7308
2024-08-01,West,Hardware,11400,70,2736
2024-09-01,North,Services,17200,100,5676
2024-09-01,South,Software,21200,136,7632
2024-09-01,East,Hardware,14700,87,3528
2024-09-01,West,Services,14900,91,4917
2024-10-01,North,Software,22500,146,8100
2024-10-01,South,Hardware,15400,91,3696
2024-10-01,East,Services,18100,105,5973
2024-10-01,West,Software,16400,99,5740
2024-11-01,North,Hardware,15900,94,3816
2024-11-01,South,Services,19000,110,6270
2024-11-01,East,Software,23800,154,8568
2024-11-01,West,Hardware,12800,78,3072
2024-12-01,North,Services,20700,121,6831
2024-12-01,South,Software,25600,165,9216
2024-12-01,East,Hardware,17200,102,4128
2024-12-01,West,Services,18100,108,5973
2025-01-01,North,Software,19200,125,6912
2025-01-01,South,Hardware,13700,82,3288
2025-01-01,East,Services,16500,98,5445
2025-01-01,West,Software,14900,91,5215
2025-02-01,North,Hardware,14300,86,3432
2025-02-01,South,Services,17200,101,5676
2025-02-01,East,Software,21400,139,7704
2025-02-01,West,Hardware,12100,74,2904
2025-03-01,North,Services,18500,108,6105
2025-03-01,South,Software,23100,148,8316
2025-03-01,East,Hardware,15800,94,3792
2025-03-01,West,Services,16200,97,5346
2025-04-01,North,Software,24400,158,8784
2025-04-01,South,Hardware,16400,98,3936
2025-04-01,East,Services,19600,115,6468
2025-04-01,West,Software,17700,107,6195
2025-05-01,North,Hardware,17100,102,4104
2025-05-01,South,Services,20600,121,6798
2025-05-01,East,Software,25900,167,9324
2025-05-01,West,Hardware,13700,83,3288
2025-06-01,North,Services,21600,127,7128
2025-06-01,South,Software,27600,178,9936
2025-06-01,East,Hardware,18400,110,4416
2025-06-01,West,Services,18900,113,6237
2025-07-01,North,Software,28900,187,10404
2025-07-01,South,Hardware,19200,114,4608
2025-07-01,East,Services,22800,134,7524
2025-07-01,West,Software,20600,124,7210
2025-08-01,North,Hardware,19800,118,4752
2025-08-01,South,Services,23900,140,7887
2025-08-01,East,Software,30400,196,10944
2025-08-01,West,Hardware,15600,94,3744
2025-09-01,North,Services,25100,147,8283
2025-09-01,South,Software,32200,207,11592
2025-09-01,East,Hardware,21100,126,5064
2025-09-01,West,Services,21700,130,7161
2025-10-01,North,Software,33900,218,12204
2025-10-01,South,Hardware,22200,132,5328
2025-10-01,East,Services,26700,156,8811
2025-10-01,West,Software,24100,145,8435
2025-11-01,North,Hardware,22900,136,5496
2025-11-01,South,Services,28100,164,9273
2025-11-01,East,Software,35900,231,12924
2025-11-01,West,Hardware,17900,108,4296
2025-12-01,North,Services,30600,178,10098
2025-12-01,South,Software,38900,249,14004
2025-12-01,East,Hardware,25600,152,6144
2025-12-01,West,Services,26900,158,8877`;

const state = {
  rows: [],
  filters: {
    region: "All",
    category: "All",
    horizon: 6
  }
};

const elements = {
  csvInput: document.getElementById("csvInput"),
  resetData: document.getElementById("resetData"),
  regionFilter: document.getElementById("regionFilter"),
  categoryFilter: document.getElementById("categoryFilter"),
  forecastHorizon: document.getElementById("forecastHorizon"),
  totalRevenue: document.getElementById("totalRevenue"),
  revenueGrowth: document.getElementById("revenueGrowth"),
  totalProfit: document.getElementById("totalProfit"),
  profitMargin: document.getElementById("profitMargin"),
  totalOrders: document.getElementById("totalOrders"),
  averageOrder: document.getElementById("averageOrder"),
  nextForecast: document.getElementById("nextForecast"),
  forecastRange: document.getElementById("forecastRange"),
  modelQuality: document.getElementById("modelQuality"),
  forecastChart: document.getElementById("forecastChart"),
  categoryChart: document.getElementById("categoryChart"),
  regionBars: document.getElementById("regionBars"),
  insightList: document.getElementById("insightList"),
  recordsTable: document.getElementById("recordsTable")
};

function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/).filter(Boolean);
  const headers = splitCsvLine(lines.shift()).map((header) => header.trim());

  return lines.map((line) => {
    const values = splitCsvLine(line);
    const item = Object.fromEntries(headers.map((header, index) => [header, values[index]]));
    return {
      date: new Date(item.date),
      region: String(item.region || "Unknown").trim(),
      category: String(item.category || "Unknown").trim(),
      revenue: Number(item.revenue) || 0,
      orders: Number(item.orders) || 0,
      profit: Number(item.profit) || 0
    };
  }).filter((row) => row.date instanceof Date && !Number.isNaN(row.date.getTime()));
}

function splitCsvLine(line) {
  const values = [];
  let current = "";
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];

    if (char === "\"" && quoted && next === "\"") {
      current += "\"";
      index += 1;
    } else if (char === "\"") {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      values.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  values.push(current);
  return values;
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value || 0);
}

function formatNumber(value) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value || 0);
}

function monthKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function monthLabel(key) {
  const [year, month] = key.split("-").map(Number);
  return new Date(year, month - 1, 1).toLocaleDateString("en-US", {
    month: "short",
    year: "2-digit"
  });
}

function addMonths(date, months) {
  return new Date(date.getFullYear(), date.getMonth() + months, 1);
}

function aggregate(rows, key) {
  return rows.reduce((acc, row) => {
    const id = typeof key === "function" ? key(row) : row[key];
    acc[id] = acc[id] || { revenue: 0, orders: 0, profit: 0, count: 0 };
    acc[id].revenue += row.revenue;
    acc[id].orders += row.orders;
    acc[id].profit += row.profit;
    acc[id].count += 1;
    return acc;
  }, {});
}

function getFilteredRows() {
  return state.rows.filter((row) => {
    const regionMatch = state.filters.region === "All" || row.region === state.filters.region;
    const categoryMatch = state.filters.category === "All" || row.category === state.filters.category;
    return regionMatch && categoryMatch;
  });
}

function fillFilter(select, values, selected) {
  select.innerHTML = "";
  ["All", ...values].forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    option.selected = value === selected;
    select.appendChild(option);
  });
}

function updateFilters() {
  const regions = [...new Set(state.rows.map((row) => row.region))].sort();
  const categories = [...new Set(state.rows.map((row) => row.category))].sort();
  fillFilter(elements.regionFilter, regions, state.filters.region);
  fillFilter(elements.categoryFilter, categories, state.filters.category);
}

function summarize(rows) {
  const totalRevenue = rows.reduce((sum, row) => sum + row.revenue, 0);
  const totalProfit = rows.reduce((sum, row) => sum + row.profit, 0);
  const totalOrders = rows.reduce((sum, row) => sum + row.orders, 0);
  const months = aggregate(rows, (row) => monthKey(row.date));
  const monthlyValues = Object.entries(months)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => ({ key, ...value }));
  const midpoint = Math.floor(monthlyValues.length / 2);
  const previous = monthlyValues.slice(0, midpoint).reduce((sum, month) => sum + month.revenue, 0);
  const recent = monthlyValues.slice(midpoint).reduce((sum, month) => sum + month.revenue, 0);
  const growth = previous > 0 ? ((recent - previous) / previous) * 100 : 0;

  return {
    totalRevenue,
    totalProfit,
    totalOrders,
    margin: totalRevenue > 0 ? (totalProfit / totalRevenue) * 100 : 0,
    aov: totalOrders > 0 ? totalRevenue / totalOrders : 0,
    growth,
    monthlyValues
  };
}

function linearRegression(values) {
  const n = values.length;
  if (n < 2) {
    return { slope: 0, intercept: values[0] || 0 };
  }

  const sumX = values.reduce((sum, _, index) => sum + index, 0);
  const sumY = values.reduce((sum, value) => sum + value, 0);
  const sumXY = values.reduce((sum, value, index) => sum + index * value, 0);
  const sumXX = values.reduce((sum, _, index) => sum + index * index, 0);
  const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;
  return { slope, intercept };
}

function buildForecast(monthlyValues, horizon) {
  if (!monthlyValues.length) {
    return { actual: [], forecast: [], residualError: 0 };
  }

  const values = monthlyValues.map((month) => month.revenue);
  const average = values.reduce((sum, value) => sum + value, 0) / values.length;
  const seasonalBuckets = {};

  monthlyValues.forEach((month) => {
    const monthNumber = Number(month.key.slice(5, 7));
    seasonalBuckets[monthNumber] = seasonalBuckets[monthNumber] || [];
    seasonalBuckets[monthNumber].push(month.revenue / average);
  });

  const seasonalIndex = Object.fromEntries(Object.entries(seasonalBuckets).map(([month, bucket]) => {
    const bucketAverage = bucket.reduce((sum, value) => sum + value, 0) / bucket.length;
    return [month, bucketAverage || 1];
  }));

  const deseasonalized = monthlyValues.map((month) => {
    const monthNumber = Number(month.key.slice(5, 7));
    return month.revenue / (seasonalIndex[monthNumber] || 1);
  });
  const trend = linearRegression(deseasonalized);
  const fitted = monthlyValues.map((month, index) => {
    const monthNumber = Number(month.key.slice(5, 7));
    return Math.max(0, (trend.intercept + trend.slope * index) * (seasonalIndex[monthNumber] || 1));
  });
  const residualError = Math.sqrt(fitted.reduce((sum, value, index) => {
    return sum + Math.pow(values[index] - value, 2);
  }, 0) / fitted.length) || average * 0.08;

  const lastDate = new Date(`${monthlyValues[monthlyValues.length - 1].key}-01T00:00:00`);
  const forecast = Array.from({ length: horizon }, (_, index) => {
    const targetDate = addMonths(lastDate, index + 1);
    const monthNumber = targetDate.getMonth() + 1;
    const x = monthlyValues.length + index;
    const revenue = Math.max(0, (trend.intercept + trend.slope * x) * (seasonalIndex[monthNumber] || 1));
    const spread = residualError * (1 + index * 0.16);
    return {
      key: monthKey(targetDate),
      revenue,
      low: Math.max(0, revenue - spread),
      high: revenue + spread
    };
  });

  return {
    actual: monthlyValues.map((month) => ({ key: month.key, revenue: month.revenue })),
    forecast,
    residualError
  };
}

function generateInsights(rows, summary, forecast) {
  if (!rows.length) {
    return [{ title: "No Data", text: "Upload a CSV or reset to sample data to generate insights." }];
  }

  const byCategory = Object.entries(aggregate(rows, "category")).sort((a, b) => b[1].revenue - a[1].revenue);
  const byRegion = Object.entries(aggregate(rows, "region")).sort((a, b) => b[1].revenue - a[1].revenue);
  const marginByCategory = byCategory
    .map(([category, value]) => ({ category, margin: value.revenue > 0 ? value.profit / value.revenue : 0 }))
    .sort((a, b) => b.margin - a.margin);
  const next = forecast.forecast[0];
  const lastActual = forecast.actual[forecast.actual.length - 1];
  const forecastLift = next && lastActual ? ((next.revenue - lastActual.revenue) / lastActual.revenue) * 100 : 0;

  return [
    {
      title: "Growth Signal",
      text: `Selected revenue is ${summary.growth >= 0 ? "up" : "down"} ${Math.abs(summary.growth).toFixed(1)}% between the first and second half of the period. ${summary.growth >= 10 ? "Consider increasing inventory and sales capacity." : "Keep monitoring demand before making major capacity changes."}`
    },
    {
      title: "Best Revenue Driver",
      text: `${byCategory[0][0]} leads revenue at ${formatCurrency(byCategory[0][1].revenue)}. Use this segment as the anchor for campaigns and bundle lower-performing offers around it.`
    },
    {
      title: "Regional Priority",
      text: `${byRegion[0][0]} is the top region with ${formatCurrency(byRegion[0][1].revenue)} in sales. Compare its playbook against ${byRegion[byRegion.length - 1][0]} to find repeatable actions.`
    },
    {
      title: "Margin Opportunity",
      text: `${marginByCategory[0].category} has the strongest margin at ${(marginByCategory[0].margin * 100).toFixed(1)}%. Protect pricing here while testing discounts in lower-margin categories.`
    },
    {
      title: "Forecast Outlook",
      text: `Next month is projected at ${next ? formatCurrency(next.revenue) : "$0"}, ${forecastLift >= 0 ? "above" : "below"} the latest actual month by ${Math.abs(forecastLift).toFixed(1)}%.`
    },
    {
      title: "Operating Focus",
      text: `Average order value is ${formatCurrency(summary.aov)} with ${summary.margin.toFixed(1)}% profit margin. Raising attach rates can improve revenue without relying only on new orders.`
    }
  ];
}

function drawForecastChart(canvas, actual, forecast) {
  const ctx = setupCanvas(canvas);
  const width = ctx.logicalWidth;
  const height = ctx.logicalHeight;
  const pad = { top: 24, right: 28, bottom: 46, left: 72 };
  const points = [...actual, ...forecast];
  const values = [
    ...actual.map((item) => item.revenue),
    ...forecast.flatMap((item) => [item.low, item.high])
  ];
  const maxValue = Math.max(...values, 1) * 1.12;
  const minValue = 0;
  const xStep = (width - pad.left - pad.right) / Math.max(points.length - 1, 1);
  const yScale = (height - pad.top - pad.bottom) / (maxValue - minValue || 1);
  const x = (index) => pad.left + index * xStep;
  const y = (value) => height - pad.bottom - (value - minValue) * yScale;

  ctx.clearRect(0, 0, width, height);
  drawGrid(ctx, width, height, pad, maxValue);

  if (forecast.length) {
    ctx.beginPath();
    forecast.forEach((item, index) => {
      const px = x(actual.length + index);
      const py = y(item.high);
      index === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    });
    [...forecast].reverse().forEach((item) => {
      const index = forecast.indexOf(item);
      ctx.lineTo(x(actual.length + index), y(item.low));
    });
    ctx.closePath();
    ctx.fillStyle = "rgba(37, 99, 235, 0.12)";
    ctx.fill();
  }

  drawLine(ctx, actual.map((item, index) => [x(index), y(item.revenue)]), "#0f9f8f", false);
  drawLine(ctx, forecast.map((item, index) => [x(actual.length + index), y(item.revenue)]), "#2563eb", true);

  ctx.fillStyle = "#657086";
  ctx.font = "12px system-ui, sans-serif";
  points.forEach((item, index) => {
    if (index % Math.ceil(points.length / 8) === 0 || index === points.length - 1) {
      ctx.fillText(monthLabel(item.key), x(index) - 20, height - 18);
    }
  });

  drawLegend(ctx, [
    ["Actual revenue", "#0f9f8f"],
    ["Forecast", "#2563eb"],
    ["Confidence range", "rgba(37, 99, 235, 0.25)"]
  ], pad.left, 20);
}

function drawCategoryChart(canvas, byCategory) {
  const ctx = setupCanvas(canvas);
  const width = ctx.logicalWidth;
  const height = ctx.logicalHeight;
  const total = byCategory.reduce((sum, [, value]) => sum + value.revenue, 0) || 1;
  const colors = ["#2563eb", "#0f9f8f", "#f97361", "#d97706", "#16825d"];
  const centerX = width / 2;
  const centerY = height / 2 - 12;
  const radius = Math.min(width, height) * 0.3;
  let angle = -Math.PI / 2;

  ctx.clearRect(0, 0, width, height);
  byCategory.forEach(([category, value], index) => {
    const slice = (value.revenue / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, angle, angle + slice);
    ctx.closePath();
    ctx.fillStyle = colors[index % colors.length];
    ctx.fill();
    angle += slice;
  });

  ctx.fillStyle = "#172033";
  ctx.font = "700 16px system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(formatCurrency(total), centerX, centerY + 5);
  ctx.textAlign = "left";
  byCategory.forEach(([category, value], index) => {
    const y = height - 62 + index * 22;
    ctx.fillStyle = colors[index % colors.length];
    ctx.fillRect(20, y - 10, 10, 10);
    ctx.fillStyle = "#657086";
    ctx.font = "12px system-ui, sans-serif";
    ctx.fillText(`${category} ${(value.revenue / total * 100).toFixed(1)}%`, 38, y);
  });
}

function setupCanvas(canvas) {
  const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const width = Math.max(320, Math.floor(rect.width));
  const height = Number(canvas.getAttribute("height"));
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  const ctx = canvas.getContext("2d");
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.logicalWidth = width;
  ctx.logicalHeight = height;
  return ctx;
}

function drawGrid(ctx, width, height, pad, maxValue) {
  ctx.strokeStyle = "#dfe6f0";
  ctx.fillStyle = "#657086";
  ctx.font = "12px system-ui, sans-serif";
  ctx.lineWidth = 1;

  for (let step = 0; step <= 4; step += 1) {
    const value = (maxValue / 4) * step;
    const y = height - pad.bottom - ((height - pad.top - pad.bottom) / 4) * step;
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(width - pad.right, y);
    ctx.stroke();
    ctx.fillText(formatCurrency(value), 10, y + 4);
  }
}

function drawLine(ctx, points, color, dashed) {
  if (!points.length) {
    return;
  }

  ctx.beginPath();
  points.forEach(([px, py], index) => {
    index === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  });
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.setLineDash(dashed ? [8, 7] : []);
  ctx.stroke();
  ctx.setLineDash([]);

  points.forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(px, py, 4, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  });
}

function drawLegend(ctx, items, x, y) {
  ctx.font = "12px system-ui, sans-serif";
  items.forEach(([label, color], index) => {
    const offset = index * 145;
    ctx.fillStyle = color;
    ctx.fillRect(x + offset, y, 10, 10);
    ctx.fillStyle = "#657086";
    ctx.fillText(label, x + offset + 16, y + 10);
  });
}

function renderRegionBars(rows) {
  const byRegion = Object.entries(aggregate(rows, "region")).sort((a, b) => b[1].revenue - a[1].revenue);
  const maxRevenue = Math.max(...byRegion.map(([, value]) => value.revenue), 1);
  elements.regionBars.innerHTML = byRegion.map(([region, value]) => {
    const margin = value.revenue > 0 ? (value.profit / value.revenue) * 100 : 0;
    const width = (value.revenue / maxRevenue) * 100;
    return `
      <div class="bar-row">
        <div class="bar-meta">
          <span>${region}</span>
          <span>${formatCurrency(value.revenue)} | ${margin.toFixed(1)}% margin</span>
        </div>
        <div class="track"><div class="fill" style="width: ${width}%"></div></div>
      </div>
    `;
  }).join("");
}

function renderInsights(insights) {
  elements.insightList.innerHTML = insights.map((insight) => `
    <article class="insight">
      <strong>${insight.title}</strong>
      <p>${insight.text}</p>
    </article>
  `).join("");
}

function renderTable(rows) {
  const latest = [...rows].sort((a, b) => b.date - a.date).slice(0, 10);
  elements.recordsTable.innerHTML = latest.map((row) => `
    <tr>
      <td>${row.date.toLocaleDateString("en-US", { month: "short", year: "numeric" })}</td>
      <td>${row.region}</td>
      <td>${row.category}</td>
      <td>${formatCurrency(row.revenue)}</td>
      <td>${formatNumber(row.orders)}</td>
      <td>${formatCurrency(row.profit)}</td>
    </tr>
  `).join("");
}

function renderDashboard() {
  const rows = getFilteredRows();
  const summary = summarize(rows);
  const forecast = buildForecast(summary.monthlyValues, state.filters.horizon);
  const next = forecast.forecast[0] || { revenue: 0, low: 0, high: 0 };
  const byCategory = Object.entries(aggregate(rows, "category")).sort((a, b) => b[1].revenue - a[1].revenue);

  elements.totalRevenue.textContent = formatCurrency(summary.totalRevenue);
  elements.revenueGrowth.textContent = `${summary.growth >= 0 ? "+" : ""}${summary.growth.toFixed(1)}% period growth`;
  elements.totalProfit.textContent = formatCurrency(summary.totalProfit);
  elements.profitMargin.textContent = `${summary.margin.toFixed(1)}% margin`;
  elements.totalOrders.textContent = formatNumber(summary.totalOrders);
  elements.averageOrder.textContent = `${formatCurrency(summary.aov)} AOV`;
  elements.nextForecast.textContent = formatCurrency(next.revenue);
  elements.forecastRange.textContent = `${formatCurrency(next.low)} - ${formatCurrency(next.high)}`;
  elements.modelQuality.textContent = forecast.actual.length >= 12 ? "Seasonal model" : "Trend model";

  drawForecastChart(elements.forecastChart, forecast.actual, forecast.forecast);
  drawCategoryChart(elements.categoryChart, byCategory);
  renderRegionBars(rows);
  renderInsights(generateInsights(rows, summary, forecast));
  renderTable(rows);
}

function loadRows(rows) {
  state.rows = rows;
  state.filters.region = "All";
  state.filters.category = "All";
  updateFilters();
  renderDashboard();
}

elements.regionFilter.addEventListener("change", (event) => {
  state.filters.region = event.target.value;
  renderDashboard();
});

elements.categoryFilter.addEventListener("change", (event) => {
  state.filters.category = event.target.value;
  renderDashboard();
});

elements.forecastHorizon.addEventListener("change", (event) => {
  state.filters.horizon = Number(event.target.value);
  renderDashboard();
});

elements.csvInput.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) {
    return;
  }

  try {
    const text = await file.text();
    const rows = parseCsv(text);
    if (!rows.length) {
      throw new Error("No valid rows found");
    }
    loadRows(rows);
  } catch (error) {
    alert(`Could not load CSV: ${error.message}`);
  } finally {
    event.target.value = "";
  }
});

elements.resetData.addEventListener("click", () => loadRows(parseCsv(SAMPLE_DATA)));
window.addEventListener("resize", () => renderDashboard());

loadRows(parseCsv(SAMPLE_DATA));

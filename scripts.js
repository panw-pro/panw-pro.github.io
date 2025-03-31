
// Mock Data
const emailData = [
    { timestamp: "2025-03-31 09:14:23", sender: "finance@acme-partners.com", subject: "Payment Information Request", risk: "Critical", sensitiveContent: "Please send your credit card details to process payment", action: "Blocked" },
    { timestamp: "2025-03-31 08:32:17", sender: "hr@globalcorp.com", subject: "Employee Information Update", risk: "High", sensitiveContent: "We need your social security number for verification", action: "Quarantined" },
    { timestamp: "2025-03-31 07:45:09", sender: "support@cloudservices.net", subject: "Account Verification Required", risk: "Medium", sensitiveContent: "Confirm your account by providing your password", action: "Warned" },
    { timestamp: "2025-03-30 18:22:56", sender: "marketing@retailstore.com", subject: "Special Offer for Premium Customers", risk: "Low", sensitiveContent: "Limited time discount for our valued customers", action: "Allowed" },
    { timestamp: "2025-03-30 15:37:41", sender: "invoice@suppliernetwork.org", subject: "March Invoice #INV-2025-3421", risk: "High", sensitiveContent: "Banking details for wire transfer included", action: "Quarantined" }
];
const creditCardData = [
    { timestamp: "2025-03-31 09:23:45", cardNumber: "4532 7614 9825 4176", location: "Payment Form", trigger: "Pattern Match", status: "Blocked" },
    { timestamp: "2025-03-31 08:17:32", cardNumber: "5412 3673 2145 3214", location: "Email Attachment", trigger: "OCR Detection", status: "Blocked" },
    { timestamp: "2025-03-30 14:52:19", cardNumber: "3782 4763 5126 453", location: "Chat Message", trigger: "AI Analysis", status: "Warned" },
    { timestamp: "2025-03-30 11:36:07", cardNumber: "6011 5583 7194 3745", location: "Document Upload", trigger: "Pattern Match", status: "Blocked" }
];
const timelineEvents = [
    { timestamp: "2025-03-31 09:14:23", event: "Credit Card Data Blocked", severity: "Critical", description: "Attempted exfiltration of credit card data blocked" },
    { timestamp: "2025-03-31 08:32:17", event: "Suspicious Email Quarantined", severity: "High", description: "Email with suspicious attachment quarantined" },
    { timestamp: "2025-03-31 07:45:09", event: "Login Attempt Failed", severity: "Medium", description: "Multiple failed login attempts from unusual location" },
    { timestamp: "2025-03-30 18:22:56", event: "System Update Completed", severity: "Info", description: "Security patches successfully applied" },
    { timestamp: "2025-03-30 15:37:41", event: "Data Access Anomaly", severity: "High", description: "Unusual access pattern to sensitive customer data" },
    { timestamp: "2025-03-30 12:14:33", event: "Firewall Rule Updated", severity: "Info", description: "New firewall rule implemented for enhanced protection" },
    { timestamp: "2025-03-30 09:22:18", event: "Ransomware Attempt Blocked", severity: "Critical", description: "Ransomware execution attempt blocked by endpoint protection" }
];
// Render Email Table
const emailTableBody = document.getElementById('email-table-body');
emailData.forEach(email => {
    const row = document.createElement('tr');
    row.className = 'border-b border-[#006400] hover:bg-[#1A1A1A]';
    const timestampCell = document.createElement('td');
    timestampCell.className = 'py-3 px-4 text-sm';
    timestampCell.textContent = email.timestamp;
    const senderCell = document.createElement('td');
    senderCell.className = 'py-3 px-4 text-sm';
    senderCell.textContent = email.sender;
    const subjectCell = document.createElement('td');
    subjectCell.className = 'py-3 px-4 text-sm';
    subjectCell.textContent = email.subject;
    const riskCell = document.createElement('td');
    riskCell.className = 'py-3 px-4';
    const riskBadge = document.createElement('span');
    switch (email.risk) {
        case 'Critical':
            riskBadge.className = 'px-2 py-1 text-xs rounded-full severity-critical';
            break;
        case 'High':
            riskBadge.className = 'px-2 py-1 text-xs rounded-full severity-warning';
            break;
        case 'Medium':
            riskBadge.className = 'px-2 py-1 text-xs rounded-full severity-info';
            break;
        default:
            riskBadge.className = 'px-2 py-1 text-xs rounded-full border border-gray-400 text-gray-400';
    }
    riskBadge.textContent = email.risk;
    riskCell.appendChild(riskBadge);
    const actionCell = document.createElement('td');
    actionCell.className = 'py-3 px-4';
    const actionBadge = document.createElement('span');
    switch (email.action) {
        case 'Blocked':
            actionBadge.className = 'px-2 py-1 text-xs rounded-full border border-red-500 text-red-500';
            break;
        case 'Quarantined':
            actionBadge.className = 'px-2 py-1 text-xs rounded-full border border-yellow-500 text-yellow-500';
            break;
        case 'Warned':
            actionBadge.className = 'px-2 py-1 text-xs rounded-full border border-blue-500 text-blue-500';
            break;
        default:
            actionBadge.className = 'px-2 py-1 text-xs rounded-full border border-green-500 text-green-500';
    }
    actionBadge.textContent = email.action;
    actionCell.appendChild(actionBadge);
    row.appendChild(timestampCell);
    row.appendChild(senderCell);
    row.appendChild(subjectCell);
    row.appendChild(riskCell);
    row.appendChild(actionCell);
    emailTableBody.appendChild(row);
});
// Render Credit Card Detection List
const ccDetectionList = document.getElementById('cc-detection-list');
creditCardData.forEach(cc => {
    const item = document.createElement('div');
    item.className = 'mb-4 p-3 bg-transparent border border-[#006400] rounded';
    const header = document.createElement('div');
    header.className = 'flex justify-between items-center mb-2';
    const cardInfo = document.createElement('div');
    cardInfo.className = 'flex items-center';
    const cardIcon = document.createElement('div');
    cardIcon.className = 'w-8 h-8 flex items-center justify-center mr-2';
    cardIcon.innerHTML = '<i class="ri-bank-card-fill text-primary"></i>';
    const cardNumber = document.createElement('span');
    cardNumber.className = 'font-medium';
    cardNumber.textContent = cc.cardNumber;
    const timestamp = document.createElement('span');
    timestamp.className = 'text-xs text-gray-400';
    timestamp.textContent = cc.timestamp;
    cardInfo.appendChild(cardIcon);
    cardInfo.appendChild(cardNumber);
    header.appendChild(cardInfo);
    header.appendChild(timestamp);
    const details = document.createElement('div');
    details.className = 'grid grid-cols-3 gap-2 mt-2 text-sm';
    const locationDiv = document.createElement('div');
    locationDiv.innerHTML = `<span class="text-gray-400">Location:</span><div>${cc.location}</div>`;
    const triggerDiv = document.createElement('div');
    triggerDiv.innerHTML = `<span class="text-gray-400">Trigger:</span><div>${cc.trigger}</div>`;
    const statusDiv = document.createElement('div');
    statusDiv.innerHTML = `<span class="text-gray-400">Status:</span>`;
    const statusBadge = document.createElement('span');
    if (cc.status === 'Blocked') {
        statusBadge.className = 'px-2 py-1 text-xs rounded-full border border-red-500 text-red-500';
    } else {
        statusBadge.className = 'px-2 py-1 text-xs rounded-full border border-yellow-500 text-yellow-500';
    }
    statusBadge.textContent = cc.status;
    statusDiv.appendChild(statusBadge);
    details.appendChild(locationDiv);
    details.appendChild(triggerDiv);
    details.appendChild(statusDiv);
    item.appendChild(header);
    item.appendChild(details);
    ccDetectionList.appendChild(item);
});
// Initialize Charts
document.addEventListener('DOMContentLoaded', function () {
    // Protection Metrics Chart
    const protectionChart = echarts.init(document.getElementById('protection-chart'));
    const protectionOption = {
        animation: false,
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            textStyle: {
                color: '#1f2937'
            }
        },
        legend: {
            data: ['Threats Detected', 'Threats Blocked', 'Data Leaks Prevented'],
            textStyle: {
                color: '#ffffff'
            },
            top: 0
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
                lineStyle: {
                    color: '#006400'
                }
            },
            axisLabel: {
                color: '#ffffff'
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#006400'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#006400',
                    opacity: 0.3
                }
            },
            axisLabel: {
                color: '#ffffff'
            }
        },
        series: [
            {
                name: 'Threats Detected',
                type: 'line',
                smooth: true,
                data: [120, 132, 101, 134, 90, 230, 210],
                lineStyle: {
                    color: 'rgba(0, 100, 0, 1)'
                },
                itemStyle: {
                    color: 'rgba(0, 100, 0, 1)'
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(0, 100, 0, 0.1)'
                        }, {
                            offset: 1, color: 'rgba(0, 100, 0, 0.05)'
                        }]
                    }
                },
                showSymbol: false
            },
            {
                name: 'Threats Blocked',
                type: 'line',
                smooth: true,
                data: [82, 93, 90, 93, 129, 133, 132],
                lineStyle: {
                    color: 'rgba(0, 168, 107, 1)'
                },
                itemStyle: {
                    color: 'rgba(0, 168, 107, 1)'
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(0, 168, 107, 0.1)'
                        }, {
                            offset: 1, color: 'rgba(0, 168, 107, 0.05)'
                        }]
                    }
                },
                showSymbol: false
            },
            {
                name: 'Data Leaks Prevented',
                type: 'line',
                smooth: true,
                data: [22, 13, 34, 5, 17, 29, 35],
                lineStyle: {
                    color: 'rgba(144, 238, 144, 1)'
                },
                itemStyle: {
                    color: 'rgba(144, 238, 144, 1)'
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(144, 238, 144, 0.1)'
                        }, {
                            offset: 1, color: 'rgba(144, 238, 144, 0.05)'
                        }]
                    }
                },
                showSymbol: false
            }
        ]
    };
    protectionChart.setOption(protectionOption);
    // Alerts Chart
    const alertsChart = echarts.init(document.getElementById('alerts-chart'));
    const alertsOption = {
        animation: false,
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            textStyle: {
                color: '#1f2937'
            }
        },
        legend: {
            orient: 'vertical',
            right: 10,
            top: 'center',
            textStyle: {
                color: '#ffffff'
            }
        },
        series: [
            {
                name: 'Alert Type',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 8,
                    borderColor: '#006400',
                    borderWidth: 1
                },
                label: {
                    show: false
                },
                emphasis: {
                    label: {
                        show: false
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 12, name: 'Critical', itemStyle: { color: 'transparent', borderColor: '#F44336', borderWidth: 1 } },
                    { value: 28, name: 'Warning', itemStyle: { color: 'transparent', borderColor: '#FFB300', borderWidth: 1 } },
                    { value: 64, name: 'Information', itemStyle: { color: 'transparent', borderColor: '#2196F3', borderWidth: 1 } }
                ]
            }
        ]
    };
    alertsChart.setOption(alertsOption);
    // Timeline Chart
    const timelineChart = echarts.init(document.getElementById('timeline-chart'));
    const timelineOption = {
        animation: false,
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            textStyle: {
                color: '#1f2937'
            },
            formatter: function (params) {
                return `<div class="font-medium">${params[0].axisValue}</div>
    <div>${params[0].marker} ${params[0].seriesName}: ${params[0].value}</div>`;
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
            axisLine: {
                lineStyle: {
                    color: '#006400'
                }
            },
            axisLabel: {
                color: '#ffffff'
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#006400'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#006400',
                    opacity: 0.3
                }
            },
            axisLabel: {
                color: '#ffffff'
            }
        },
        series: [
            {
                name: 'Security Events',
                type: 'bar',
                barWidth: '60%',
                data: [
                    { value: 2, itemStyle: { color: 'transparent', borderColor: '#2196F3', borderWidth: 1 } },
                    { value: 1, itemStyle: { color: 'transparent', borderColor: '#2196F3', borderWidth: 1 } },
                    { value: 3, itemStyle: { color: 'transparent', borderColor: '#FFB300', borderWidth: 1 } },
                    { value: 5, itemStyle: { color: 'transparent', borderColor: '#F44336', borderWidth: 1 } },
                    { value: 2, itemStyle: { color: 'transparent', borderColor: '#2196F3', borderWidth: 1 } },
                    { value: 4, itemStyle: { color: 'transparent', borderColor: '#FFB300', borderWidth: 1 } },
                    { value: 1, itemStyle: { color: 'transparent', borderColor: '#2196F3', borderWidth: 1 } },
                    { value: 3, itemStyle: { color: 'transparent', borderColor: '#FFB300', borderWidth: 1 } }
                ],
                itemStyle: {
                    borderRadius: [4, 4, 0, 0]
                }
            }
        ],
        markLine: {
            silent: true,
            lineStyle: {
                color: '#F44336'
            },
            data: [{
                xAxis: 'now'
            }]
        }
    };
    timelineChart.setOption(timelineOption);
    // Handle window resize
    window.addEventListener('resize', function () {
        protectionChart.resize();
        alertsChart.resize();
        timelineChart.resize();
    });
});
// Make widgets draggable
const widgets = document.querySelectorAll('.widget');
widgets.forEach(widget => {
    let isDragging = false;
    let offsetX, offsetY;
    const header = widget.querySelector('.widget-header');
    header.addEventListener('mousedown', startDrag);
    function startDrag(e) {
        e.preventDefault();
        isDragging = true;
        // Get the initial mouse position
        offsetX = e.clientX - widget.getBoundingClientRect().left;
        offsetY = e.clientY - widget.getBoundingClientRect().top;
        // Add event listeners for dragging and stopping
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDrag);
        // Add a class to indicate dragging
        widget.classList.add('dragging');
        widget.style.position = 'absolute';
        widget.style.zIndex = '1000';
    }
    function drag(e) {
        if (!isDragging) return;
        // Calculate the new position
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;
        // Update the position
        widget.style.left = x + 'px';
        widget.style.top = y + 'px';
    }
    function stopDrag() {
        if (!isDragging) return;
        isDragging = false;
        // Remove the event listeners
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', stopDrag);
        // Remove the dragging class
        widget.classList.remove('dragging');
    }
});
// Session timeout countdown
let timeoutMinutes = 14;
let timeoutSeconds = 32;
const timeoutElement = document.querySelector('span.font-medium');
function updateTimeout() {
    if (timeoutSeconds === 0) {
        if (timeoutMinutes === 0) {
            clearInterval(timeoutInterval);
            return;
        }
        timeoutMinutes--;
        timeoutSeconds = 59;
    } else {
        timeoutSeconds--;
    }
    timeoutElement.textContent = `${timeoutMinutes}:${timeoutSeconds < 10 ? '0' : ''}${timeoutSeconds}`;
}
const timeoutInterval = setInterval(updateTimeout, 1000);
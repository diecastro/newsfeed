import sinon from 'sinon';

let routing = {
  locationBeforeTransitions: {
    pathname: 'somePathName',
    query: {token: 'SomeToken'}
  }
};

let location = {
  query: {}
};

let history = {push: sinon.stub()};

export default {
  chartData: {
    salesChartLabels: ['9/4/2016', '9/5/2016', '9/6/2016', '9/7/2016', '9/8/2016', '9/9/2016', '9/10/2016'],
    salesChartPreviousCount: [450, 444, 89, 100, 900, 1000, 10],
    salesChartCurrentCount: [600, 900, 666, 100, 2000, 2500, 35],
    itemChartLabels: ['Silver Watch', 'Brown Leather Laptop Bag', 'Black Men\'s Sunglasses', 'Brown Men\'s Watch', 'Khaki Backpack'],
    itemChartPreviousCount: [25, 100, 2, 100, 201],
    itemChartCurrentCount: [175, 100, 66, 100, 21],
    itemSalesTotalChartLabels: ['Silver Watch', 'Brown Leather Laptop Bag', 'Black Men\'s Sunglasses', 'Brown Men\'s Watch', 'Khaki Backpack'],
    itemSalesTotalChartPreviousCount: [2, 5, 1, 10, 5],
    itemSalesTotalChartCurrentCount: [12, 9, 2, 6, 2],
    categoriesChartLabels: ['Women\'s clothes', 'Women\'s Accessories', 'Men\'s clothes', 'Mens\'s Accessories'],
    categoriesChartPreviousCount: [250, 25, 301, 100],
    categoriesChartCurrentCount: [55, 87, 175, 100],
    categoriesSalesTotalChartLabels: ['Women\'s clothes', 'Women\'s Accessories', 'Men\'s clothes', 'Mens\'s Accessories'],
    categoriesSalesTotalChartPreviousCount: [5, 3, 20, 6],
    categoriesSalesTotalChartCurrentCount: [1, 5, 17, 5],
    paymentMethodLabels: [
      'Swiped',
      'Chip (EMV)',
      'Contactless',
      'Keyed',
      'Cash'
    ],
    paymentMethodBackgroundColor: [
      '#F0F0F0',
      '#C0C0C0',
      '#606060',
      '#909090',
      '#000000',
    ],
    paymentMethodHoverColor: [
      '#000000',
      '#000000',
      '#000000',
      '#000000',
      '#000000',
    ],
    creditSalesLabels: [
      'Visa',
      'Mastercard',
      'American Express',
      'Discover'
    ],
    creditSalesBackgroundColor: [
      '#F0F0F0',
      '#C0C0C0',
      '#606060',
      '#909090'
    ],
    creditSalesHoverColor: [
      '#000000',
      '#000000',
      '#000000',
      '#000000',
    ],
    creditSalesDataSet: [400, 100, 50, 450],
    paymentMethodSalesDataSet: [300, 50, 100, 33, 11],
    paymentMethodPercentageDataSet: [60, 10, 20, 8, 2],
    creditPercentageDataSet: [60, 10, 20, 8, 2]
  },
  dateRange: {startDate: null, endDate: null, value: 'all', text: 'All Time'},
  reportsDateRange: {startDate: null, endDate: null, value: 'all', text: 'All Time'},
  dispatch: sinon.stub(),
  isAuthenticated: true,
  routing: routing,
  history: history,
  location: location,
  selectedMerchantAccount: '3',
  user: {
    selectedMerchantAccount: '3',
    data: {
      username: 'someUsername',
      password: 'somePassword',
      user_id: 555,
      merchantAccounts: [
        {
          dba_name: 'first merchant',
          mea_id: '3',
          mid: '5555555555551',
          processor: 'GLB',
          relationship: 'ROLE_OWNER',
          active: true,
        },
        {
          dba_name: 'second merchant',
          mea_id: '103',
          mid: '5555555555552',
          processor: 'GLB',
          relationship: 'ROLE_OWNER',
          active: true,
        },
        {
          dba_name: 'third merchant',
          mea_id: '333',
          mid: '5555555555553',
          processor: 'GLB',
          relationship: 'ROLE_OWNER',
          active: true,
        },
      ]
    }
  },
  activities: {
    data: {
      'uniqueCustomers': 6,
      'totalSales': [
        {
          'total': 8.19,
          'name': 'Sep'
        },
        {
          'total': 10.509999999999998,
          'name': 'Aug'
        },
        {
          'total': 270.6299999999998,
          'name': 'Jul',
          'previousTotal': 11.29
        },
        {
          'total': 17.6,
          'name': 'May',
          'previousTotal': 40.61
        },
        {
          'total': 273.76,
          'name': 'Apr',
          'previousTotal': 7.119999999999999
        },
        {
          'total': 2.13,
          'name': 'Mar',
          'previousTotal': 1.06
        },
        {
          'total': 2.65,
          'name': 'Feb',
          'previousTotal': 307.51000000000005
        },
        {
          'total': 6.17,
          'name': 'Jan'
        },
        {
          'previousTotal': 267.99,
          'name': 'Dec'
        },
        {
          'previousTotal': 15.9,
          'name': 'Nov'
        },
        {
          'previousTotal': 79.4,
          'name': 'Oct'
        },
        {
          'previousTotal': 0.85,
          'name': 'Jun'
        }
      ],
      'items': [
        {
          'name': 'Express Item',
          'count': 1,
          'previousCount': 1,
          'total': 96,
          'previousTotal': 22
        },
        {
          'name': 'Taxes',
          'count': 0,
          'previousCount': 1,
          'total': 0,
          'previousTotal': 85
        },
        {
          'name': 'PayAnywhere',
          'count': 0,
          'previousCount': 1,
          'total': 0,
          'previousTotal': 39
        },
        {
          'name': 'Tshirt',
          'count': 0,
          'previousCount': 1,
          'total': 0,
          'previousTotal': 14
        },
        {
          'name': 'Tax',
          'count': 0,
          'previousCount': 1,
          'total': 0,
          'previousTotal': 14
        }
      ],
      'itemsSales': [
        {
          'name': 'Express Item',
          'count': 1,
          'previousCount': 1,
          'total': 604.6978,
          'previousTotal': 102.37
        },
        {
          'name': 'Taxes',
          'count': 0,
          'previousCount': 1,
          'total': 0,
          'previousTotal': 424.45
        },
        {
          'name': 'Tshirt',
          'count': 0,
          'previousCount': 1,
          'total': 0,
          'previousTotal': 262.45
        },
        {
          'name': 'Sofa',
          'count': 0,
          'previousCount': 1,
          'total': 0,
          'previousTotal': 95.4
        },
        {
          'name': 'Tax',
          'count': 0,
          'previousCount': 1,
          'total': 0,
          'previousTotal': 74.2
        }
      ],
      'categories': [
        {
          'name': 'No Category Name',
          'count': 1,
          'previousCount': 1,
          'total': 95,
          'previousTotal': 38
        },
        {
          'name': 'Furniture',
          'count': 0,
          'previousCount': 1,
          'total': 0,
          'previousTotal': 2
        }
      ],
      'categorySales': [
        {
          'name': 'No Category Name',
          'count': 1,
          'previousCount': 1,
          'total': 604.6978,
          'previousTotal': 954.45
        },
        {
          'name': 'Furniture',
          'count': 0,
          'previousCount': 1,
          'total': 0,
          'previousTotal': 153.7
        }
      ],
      'creditCardNetworkSales': [
        {
          'name': 'American Express',
          'count': 11,
          'total': 7.92
        },
        {
          'name': 'Mastercard',
          'count': 14,
          'total': 121.67000000000002
        },
        {
          'name': 'Discover',
          'count': 14,
          'total': 9.38
        },
        {
          'name': 'null',
          'count': 25,
          'total': 0
        },
        {
          'name': 'Visa',
          'count': 33,
          'total': 104.32999999999998
        }
      ],
      'visaSales': 104.32999999999998,
      'masterCardSales': 121.67000000000002,
      'amexSales': 7.92,
      'discoverSales': 9.38,
      'payPalSales': 0,
      'visaPercentage': '42.88',
      'masterCardPercentage': '50.01',
      'amexPercentage': '3.26',
      'discoverPercentage': '3.86',
      'payPalPercentage': '0.00',
      'paymentMethods': [
        {
          'name': 'Contactless',
          'count': 3,
          'total': 1.01
        },
        {
          'name': 'Chip Read',
          'count': 12,
          'total': 96.19
        },
        {
          'name': 'null',
          'count': 25,
          'total': 0
        },
        {
          'name': 'Keyed',
          'count': 28,
          'total': 134.07000000000002
        },
        {
          'name': 'Swiped',
          'count': 29,
          'total': 12.029999999999998
        },
        {
          'name': 'Cash Sales',
          'count': 19,
          'total': 348.34
        }
      ],
      'swipedSales': 12.029999999999998,
      'contactlessSales': 1.01,
      'chipSales': 96.19,
      'keyedSales': 134.07000000000002,
      'cashSales': 348.34,
      'swipedPercentage': '2.03',
      'contactlessPercentage': '0.17',
      'chipPercentage': '16.26',
      'keyedPercentage': '22.66',
      'cashPercentage': '58.88',
      'totalDiscounts': 0,
      'totalTax': 32.24779999999999,
      'totalTips': 1.08,
      'totalTipsPrevious': 3.53,
      'tipDifference': -2.268518518518518,
      'transactionDifference': -0.6701030927835051,
      'transactionNumber': 97,
      'transactionNumberPrevious': 162,
      'currentActivities': {
        'data': {
          'transactions': [{
            'type': 'Credit Sale',
            'txn_source': 'PayAnywhere Portal',
            'amount': '1.00000000000000000000',
            'datetime': '2016-09-09T18:07:46.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Refund',
            'amount': '2.22000000000000000000',
            'datetime': '2016-09-09T18:37:26.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Credit Sale',
            'txn_source': 'Phone Swipe Portal',
            'amount': '1.00000000000000000000',
            'datetime': '2016-09-09T18:17:46.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '1.00',
            'datetime': '2016-09-09T18:17:37.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '1.00000000000000000000',
            'datetime': '2016-09-09T18:17:13.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.58000000000000000000',
            'datetime': '2016-09-09T18:16:54.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.59000000000000000000',
            'datetime': '2016-09-09T18:16:32.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.98000000000000000000',
            'datetime': '2016-09-09T18:15:44.000Z',
            'cc_type': 'Contactless',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.69000000000000000000',
            'datetime': '2016-09-09T18:14:47.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '2.35000000000000000000',
            'datetime': '2016-09-09T18:10:04.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Refund',
            'amount': '0.08000000000000000000',
            'datetime': '2016-08-30T16:33:17.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Credit Sale',
            'amount': '2.22000000000000000000',
            'datetime': '2016-08-30T16:29:24.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Refund',
            'amount': '0.01000000000000000000',
            'datetime': '2016-08-30T16:27:01.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Credit Refund',
            'amount': '0.11000000000000000000',
            'datetime': '2016-08-30T16:26:20.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Credit Sale',
            'amount': '0.54000000000000000000',
            'datetime': '2016-08-30T16:23:49.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.09000000000000000000',
            'datetime': '2016-08-30T16:16:45.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '1.23000000000000000000',
            'datetime': '2016-08-30T16:15:35.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.02000000000000000000',
            'datetime': '2016-08-30T15:12:55.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-08-30T15:11:26.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-08-30T13:59:05.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Discover',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.23000000000000000000',
            'datetime': '2016-08-30T13:54:35.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Discover',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-08-30T13:52:52.000Z',
            'cc_type': 'Contactless',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.02000000000000000000',
            'datetime': '2016-08-29T18:33:55.000Z',
            'cc_type': 'Contactless',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-08-29T17:23:17.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-08-29T17:20:18.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '5.00000000000000000000',
            'datetime': '2016-08-26T17:45:01.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '1.00000000000000000000',
            'datetime': '2016-08-26T17:43:53.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.11000000000000000000',
            'datetime': '2016-08-01T19:02:52.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': '0.02000000000000000000',
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-28T12:03:55.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-28T12:00:58.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.08000000000000000000',
            'datetime': '2016-07-27T20:51:53.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Discover',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.08000000000000000000',
            'datetime': '2016-07-27T20:50:25.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.08000000000000000000',
            'datetime': '2016-07-27T20:47:59.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'American Express',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.08000000000000000000',
            'datetime': '2016-07-27T20:46:54.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.08000000000000000000',
            'datetime': '2016-07-27T20:45:33.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.08000000000000000000',
            'datetime': '2016-07-27T20:42:58.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.08000000000000000000',
            'datetime': '2016-07-27T20:40:55.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Discover',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T20:40:23.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'American Express',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '0.01',
            'datetime': '2016-07-27T19:49:40.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '50.01',
            'datetime': '2016-07-27T19:47:33.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '0.01',
            'datetime': '2016-07-27T19:47:25.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00420000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '0.01',
            'datetime': '2016-07-27T19:46:53.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00420000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '0.01',
            'datetime': '2016-07-27T19:46:39.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T19:45:37.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'American Express',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00420000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T19:44:32.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Discover',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00420000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '0.01',
            'datetime': '2016-07-27T19:44:28.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '0.01',
            'datetime': '2016-07-27T19:44:01.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.77000000000000000000',
            'datetime': '2016-07-27T19:43:50.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'American Express',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T19:43:47.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00420000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T19:43:14.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'American Express',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T19:42:19.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'American Express',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T19:42:08.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Discover',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T19:41:17.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '7.80000000000000000000',
            'datetime': '2016-07-27T19:40:35.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Discover',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T19:40:21.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '2.00000000000000000000',
            'datetime': '2016-07-27T19:40:14.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'American Express',
            'tip_amount': '0.30000000000000000000',
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T19:39:38.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00420000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '108.00000000000000000000',
            'datetime': '2016-07-27T19:39:28.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '8.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T19:38:50.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Discover',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T19:37:32.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T19:37:23.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T19:37:22.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '5.00000000000000000000',
            'datetime': '2016-07-27T19:36:40.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'American Express',
            'tip_amount': '0.75000000000000000000',
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T19:36:04.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Discover',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00420000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T19:33:45.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'American Express',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T19:33:20.000Z',
            'cc_type': 'Chip Read',
            'customer_id': 1105,
            'network': 'Discover',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00420000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.03000000000000000000',
            'datetime': '2016-07-27T19:33:07.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T19:32:53.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T19:32:47.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T19:31:24.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T19:30:45.000Z',
            'cc_type': 'Chip Read',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T19:29:33.000Z',
            'cc_type': 'Chip Read',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T19:23:56.000Z',
            'cc_type': 'Chip Read',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T19:23:41.000Z',
            'cc_type': 'Chip Read',
            'customer_id': 1105,
            'network': 'Discover',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00420000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T19:20:12.000Z',
            'cc_type': 'Chip Read',
            'customer_id': 1105,
            'network': 'American Express',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T19:18:29.000Z',
            'cc_type': 'Chip Read',
            'customer_id': 1105,
            'network': 'American Express',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-07-27T19:18:04.000Z',
            'cc_type': 'Chip Read',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '1.00000000000000000000',
            'datetime': '2016-07-27T18:16:54.000Z',
            'cc_type': 'Chip Read',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '55.62000000000000000000',
            'datetime': '2016-07-19T23:00:10.000Z',
            'cc_type': 'Chip Read',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '8.99000000000000000000',
            'datetime': '2016-07-19T22:58:29.000Z',
            'cc_type': 'Chip Read',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '30.50000000000000000000',
            'datetime': '2016-07-19T22:56:10.000Z',
            'cc_type': 'Chip Read',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Refund',
            'amount': '1.06000000000000000000',
            'datetime': '2016-05-20T13:53:53.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Cash Sale',
            'amount': '1.06',
            'datetime': '2016-05-20T13:50:19.000Z',
            'cc_type': null,
            'customer_id': 6616,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.07000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '0.62',
            'datetime': '2016-05-20T13:49:15.000Z',
            'cc_type': null,
            'customer_id': 6616,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.04000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '9.47',
            'datetime': '2016-05-13T11:58:20.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.59000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '3.92000000000000000000',
            'datetime': '2016-05-13T11:53:06.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.37000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '2.00',
            'datetime': '2016-05-13T11:52:51.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.37000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '0.53',
            'datetime': '2016-05-13T11:52:31.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.03000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '5.70',
            'datetime': '2016-04-13T10:30:52.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.46000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '267.00',
            'datetime': '2016-04-13T10:27:53.000Z',
            'cc_type': null,
            'customer_id': 5758,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '21.54000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '1.06000000000000000000',
            'datetime': '2016-04-01T19:04:32.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Discover',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.06000000000000000000'
          }, {
            'type': 'Void',
            'amount': '0.01000000000000000000',
            'datetime': '2016-03-30T12:56:50.000Z',
            'cc_type': null,
            'customer_id': 1105,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2016-03-30T12:52:08.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Discover',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '1.01',
            'datetime': '2016-03-30T12:49:13.000Z',
            'cc_type': null,
            'customer_id': 5450,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.06000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.05000000000000000000',
            'datetime': '2016-03-30T12:49:03.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Discover',
            'tip_amount': '0.01000000000000000000',
            'total_discount_amt': null,
            'tax_amt': '0.06000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '1.06',
            'datetime': '2016-03-30T12:35:51.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.06000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '2.65',
            'datetime': '2016-02-02T12:44:46.000Z',
            'cc_type': null,
            'customer_id': 5028,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.15000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '6.17',
            'datetime': '2016-01-18T18:16:04.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.35000000000000000000'
          }],
          'items': [{'name': 'Express Item', 'quantity': '2'}, {
            'name': 'Express Item',
            'quantity': '1'
          }, {'name': 'Express Item', 'quantity': '1'}, {
            'name': 'Express Item',
            'quantity': '1'
          }, {'name': 'Express Item', 'quantity': '1'}]
        }, 'status': 200
      },
      'previousActivities': {
        'data': {
          'transactions': [{
            'type': 'Cash Sale',
            'amount': '7.60',
            'datetime': '2015-12-30T13:19:09.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.60000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '3.00000000000000000000',
            'datetime': '2015-12-30T13:18:58.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.60000000000000000000'
          }, {
            'type': 'Void',
            'amount': '2.00000000000000000000',
            'datetime': '2015-12-30T13:18:07.000Z',
            'cc_type': null,
            'customer_id': 1105,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Credit Sale',
            'amount': '2.00000000000000000000',
            'datetime': '2015-12-30T13:18:02.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.60000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '8.60',
            'datetime': '2015-12-30T13:00:27.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.60000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '2.00',
            'datetime': '2015-12-30T13:00:21.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.60000000000000000000'
          }, {
            'type': 'Void',
            'amount': '2.00000000000000000000',
            'datetime': '2015-12-30T13:00:14.000Z',
            'cc_type': null,
            'customer_id': 1105,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Credit Sale',
            'amount': '2.00000000000000000000',
            'datetime': '2015-12-30T13:00:04.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.60000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2015-12-29T18:50:09.000Z',
            'cc_type': 'Contactless',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '0.01000000000000000000',
            'datetime': '2015-12-29T18:32:51.000Z',
            'cc_type': 'Contactless',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Refund',
            'amount': '1.00000000000000000000',
            'datetime': '2015-12-29T14:16:24.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Cash Sale',
            'amount': '10.60',
            'datetime': '2015-12-29T14:16:01.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.60000000000000000000'
          }, {
            'type': 'Void',
            'amount': '1.00000000000000000000',
            'datetime': '2015-12-22T19:12:43.000Z',
            'cc_type': null,
            'customer_id': 1105,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Cash Refund',
            'amount': '0.50000000000000000000',
            'datetime': '2015-12-22T19:12:04.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Cash Sale',
            'amount': '1.00',
            'datetime': '2015-12-22T19:11:24.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '1.00000000000000000000',
            'datetime': '2015-12-22T19:11:08.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': '0.18000000000000000000',
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '4.30000000000000000000',
            'datetime': '2015-12-21T20:23:11.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '1.00000000000000000000',
            'datetime': '2015-12-21T20:22:29.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '5.30000000000000000000',
            'datetime': '2015-12-21T20:21:57.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '5.30000000000000000000',
            'datetime': '2015-12-21T20:18:18.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': '1.00000000000000000000',
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Cash Refund',
            'amount': '2.00000000000000000000',
            'datetime': '2015-12-21T19:20:05.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Cash Refund',
            'amount': '3.00000000000000000000',
            'datetime': '2015-12-21T19:20:05.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Cash Sale',
            'amount': '3.00',
            'datetime': '2015-12-21T19:19:58.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '2.00',
            'datetime': '2015-12-21T19:19:46.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Void',
            'amount': '5.00000000000000000000',
            'datetime': '2015-12-21T19:19:35.000Z',
            'cc_type': null,
            'customer_id': 1105,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Credit Sale',
            'amount': '5.00000000000000000000',
            'datetime': '2015-12-21T19:19:31.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '9.30',
            'datetime': '2015-12-21T19:15:10.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '1.00',
            'datetime': '2015-12-21T19:15:00.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Void',
            'amount': '5.00000000000000000000',
            'datetime': '2015-12-21T19:14:47.000Z',
            'cc_type': null,
            'customer_id': 1105,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Credit Sale',
            'amount': '5.00000000000000000000',
            'datetime': '2015-12-21T19:14:42.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '4.30',
            'datetime': '2015-12-21T19:10:52.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '1.00000000000000000000',
            'datetime': '2015-12-21T19:10:32.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': '0.20000000000000000000',
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Void',
            'amount': '5.30000000000000000000',
            'datetime': '2015-12-21T19:10:09.000Z',
            'cc_type': null,
            'customer_id': 1105,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Credit Sale',
            'amount': '5.30000000000000000000',
            'datetime': '2015-12-21T19:10:05.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '5.00',
            'datetime': '2015-12-21T19:09:40.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '5.30',
            'datetime': '2015-12-21T18:41:58.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '5.00',
            'datetime': '2015-12-21T18:41:51.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Void',
            'amount': '5.00000000000000000000',
            'datetime': '2015-12-21T18:41:42.000Z',
            'cc_type': null,
            'customer_id': 1105,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Credit Sale',
            'amount': '5.00000000000000000000',
            'datetime': '2015-12-21T18:41:38.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '5.30',
            'datetime': '2015-12-21T18:36:48.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '5.00',
            'datetime': '2015-12-21T18:36:32.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Void',
            'amount': '5.00000000000000000000',
            'datetime': '2015-12-21T18:36:23.000Z',
            'cc_type': null,
            'customer_id': 1105,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Credit Sale',
            'amount': '5.00000000000000000000',
            'datetime': '2015-12-21T18:36:02.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Void',
            'amount': '5.00000000000000000000',
            'datetime': '2015-12-21T18:32:08.000Z',
            'cc_type': null,
            'customer_id': 1105,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Cash Refund',
            'amount': '1.00000000000000000000',
            'datetime': '2015-12-21T18:32:05.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Cash Sale',
            'amount': '1.00',
            'datetime': '2015-12-21T18:32:01.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '5.00000000000000000000',
            'datetime': '2015-12-21T18:31:43.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': '1.00000000000000000000',
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Void',
            'amount': '5.00000000000000000000',
            'datetime': '2015-12-21T18:31:27.000Z',
            'cc_type': null,
            'customer_id': 1105,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Credit Sale',
            'amount': '5.00000000000000000000',
            'datetime': '2015-12-21T18:31:23.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '5.00000000000000000000',
            'datetime': '2015-12-21T14:39:09.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': '0.75000000000000000000',
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '5.00000000000000000000',
            'datetime': '2015-12-21T14:38:13.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '5.00000000000000000000',
            'datetime': '2015-12-21T14:36:56.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '5.00000000000000000000',
            'datetime': '2015-12-21T14:31:51.000Z',
            'cc_type': 'Swiped',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '2.00000000000000000000',
            'datetime': '2015-12-21T14:12:20.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '2.00',
            'datetime': '2015-12-21T14:12:03.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '2.00000000000000000000',
            'datetime': '2015-12-21T14:10:05.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Mastercard',
            'tip_amount': '0.40000000000000000000',
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '2.00',
            'datetime': '2015-12-21T14:09:44.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '5.00',
            'datetime': '2015-12-18T20:52:15.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '5.00',
            'datetime': '2015-12-18T20:35:37.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '5.00',
            'datetime': '2015-12-18T20:21:51.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '5.00',
            'datetime': '2015-12-18T19:56:17.000Z',
            'cc_type': null,
            'customer_id': 4939,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '1.00000000000000000000',
            'datetime': '2015-12-18T17:19:06.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '1.00',
            'datetime': '2015-12-18T17:18:48.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '5.00',
            'datetime': '2015-12-18T17:05:12.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Void',
            'amount': '5.00000000000000000000',
            'datetime': '2015-12-18T17:05:00.000Z',
            'cc_type': null,
            'customer_id': 1105,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Credit Sale',
            'amount': '5.00000000000000000000',
            'datetime': '2015-12-18T17:04:57.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '5.00',
            'datetime': '2015-12-18T17:04:31.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '5.00',
            'datetime': '2015-12-18T16:56:48.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Void',
            'amount': '5.00000000000000000000',
            'datetime': '2015-12-18T16:56:43.000Z',
            'cc_type': null,
            'customer_id': 1105,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Credit Sale',
            'amount': '5.00000000000000000000',
            'datetime': '2015-12-18T16:56:37.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '5.00',
            'datetime': '2015-12-18T16:56:13.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '3.00',
            'datetime': '2015-12-17T20:23:27.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Void',
            'amount': '1.00000000000000000000',
            'datetime': '2015-12-17T20:23:10.000Z',
            'cc_type': null,
            'customer_id': 1105,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Credit Sale',
            'amount': '1.00000000000000000000',
            'datetime': '2015-12-17T20:23:05.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '1.00000000000000000000',
            'datetime': '2015-12-17T20:20:59.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '1.00',
            'datetime': '2015-12-17T20:20:17.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Refund',
            'amount': '5.30000000000000000000',
            'datetime': '2015-12-17T19:56:45.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Cash Sale',
            'amount': '5.30',
            'datetime': '2015-12-17T19:03:46.000Z',
            'cc_type': null,
            'customer_id': 4931,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '5.00',
            'datetime': '2015-12-17T19:03:19.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Refund',
            'amount': '1.00000000000000000000',
            'datetime': '2015-12-17T18:54:43.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Cash Refund',
            'amount': '0.50000000000000000000',
            'datetime': '2015-12-17T18:54:43.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Cash Sale',
            'amount': '0.50',
            'datetime': '2015-12-17T18:54:34.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '1.00',
            'datetime': '2015-12-17T18:54:23.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Refund',
            'amount': '0.75000000000000000000',
            'datetime': '2015-12-17T18:39:15.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Void',
            'amount': '1.00000000000000000000',
            'datetime': '2015-12-17T18:39:15.000Z',
            'cc_type': null,
            'customer_id': 1105,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Cash Refund',
            'amount': '0.25000000000000000000',
            'datetime': '2015-12-17T18:39:14.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Credit Sale',
            'amount': '1.00000000000000000000',
            'datetime': '2015-12-17T18:39:03.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '0.75',
            'datetime': '2015-12-17T18:38:42.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '0.25',
            'datetime': '2015-12-17T18:37:55.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Refund',
            'amount': '0.75000000000000000000',
            'datetime': '2015-12-17T18:26:56.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Cash Refund',
            'amount': '0.25000000000000000000',
            'datetime': '2015-12-17T18:26:55.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Void',
            'amount': '1.00000000000000000000',
            'datetime': '2015-12-17T18:26:53.000Z',
            'cc_type': null,
            'customer_id': 1105,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Credit Sale',
            'amount': '1.00000000000000000000',
            'datetime': '2015-12-17T18:26:43.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '0.25',
            'datetime': '2015-12-17T18:26:27.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '0.75',
            'datetime': '2015-12-17T18:26:19.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Refund',
            'amount': '0.50000000000000000000',
            'datetime': '2015-12-17T18:21:14.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Cash Refund',
            'amount': '0.50000000000000000000',
            'datetime': '2015-12-17T18:21:13.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Void',
            'amount': '1.00000000000000000000',
            'datetime': '2015-12-17T18:21:11.000Z',
            'cc_type': null,
            'customer_id': 1105,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Credit Sale',
            'amount': '1.00000000000000000000',
            'datetime': '2015-12-17T18:21:02.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '0.50',
            'datetime': '2015-12-17T18:20:44.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '0.50',
            'datetime': '2015-12-17T18:20:35.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Refund',
            'amount': '1.00000000000000000000',
            'datetime': '2015-12-17T18:17:53.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Void',
            'amount': '1.00000000000000000000',
            'datetime': '2015-12-17T18:17:52.000Z',
            'cc_type': null,
            'customer_id': 1105,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Credit Sale',
            'amount': '1.00000000000000000000',
            'datetime': '2015-12-17T18:17:32.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '1.00',
            'datetime': '2015-12-17T18:17:14.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Credit Sale',
            'amount': '4.00000000000000000000',
            'datetime': '2015-12-17T18:13:55.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '1.00',
            'datetime': '2015-12-17T18:13:13.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Refund',
            'amount': '5.97000000000000000000',
            'datetime': '2015-12-17T17:20:07.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Cash Refund',
            'amount': '5.00000000000000000000',
            'datetime': '2015-12-17T17:15:51.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Credit Refund',
            'amount': '4.25000000000000000000',
            'datetime': '2015-12-17T17:14:13.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Credit Refund',
            'amount': '0.25000000000000000000',
            'datetime': '2015-12-17T17:13:26.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Credit Refund',
            'amount': '0.50000000000000000000',
            'datetime': '2015-12-17T17:10:29.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Credit Sale',
            'amount': '5.00000000000000000000',
            'datetime': '2015-12-17T17:05:18.000Z',
            'cc_type': 'Keyed',
            'customer_id': 1105,
            'network': 'Visa',
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '5.00',
            'datetime': '2015-12-17T16:08:37.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '10.97',
            'datetime': '2015-12-17T15:55:31.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.29000000000000000000'
          }, {
            'type': 'Cash Refund',
            'amount': '15.90000000000000000000',
            'datetime': '2015-11-16T19:35:44.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Cash Sale',
            'amount': '15.90',
            'datetime': '2015-11-16T19:35:23.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.90000000000000000000'
          }, {
            'type': 'Cash Refund',
            'amount': '5.00000000000000000000',
            'datetime': '2015-10-05T08:48:20.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Cash Sale',
            'amount': '5.00',
            'datetime': '2015-10-05T08:38:55.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.60000000000000000000'
          }, {
            'type': 'Cash Refund',
            'amount': '5.00000000000000000000',
            'datetime': '2015-10-05T08:38:19.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Cash Sale',
            'amount': '5.00',
            'datetime': '2015-10-05T08:17:44.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.60000000000000000000'
          }, {
            'type': 'Cash Refund',
            'amount': '25.00000000000000000000',
            'datetime': '2015-10-05T07:30:54.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Cash Sale',
            'amount': '25.00',
            'datetime': '2015-10-05T07:30:13.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '1.80000000000000000000'
          }, {
            'type': 'Cash Refund',
            'amount': '2.00000000000000000000',
            'datetime': '2015-10-05T07:28:55.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Cash Sale',
            'amount': '2.00',
            'datetime': '2015-10-05T07:26:18.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '5.30',
            'datetime': '2015-10-05T06:51:27.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '11.20',
            'datetime': '2015-10-05T06:50:35.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '1.20000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '10.00',
            'datetime': '2015-10-05T06:50:15.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '1.20000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '5.90',
            'datetime': '2015-10-05T06:48:41.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.90000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '10.00',
            'datetime': '2015-10-05T06:47:47.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.90000000000000000000'
          }, {
            'type': 'Cash Refund',
            'amount': '0.10000000000000000000',
            'datetime': '2015-07-29T17:58:53.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Cash Sale',
            'amount': '0.10',
            'datetime': '2015-07-29T17:46:55.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Refund',
            'amount': '2.00000000000000000000',
            'datetime': '2015-07-08T17:17:24.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Cash Sale',
            'amount': '11.19',
            'datetime': '2015-07-08T17:09:30.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.04000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '0.85',
            'datetime': '2015-06-23T18:15:58.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '19.00',
            'datetime': '2015-05-18T15:29:48.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '0.55',
            'datetime': '2015-05-15T14:12:37.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Refund',
            'amount': '13.00000000000000000000',
            'datetime': '2015-05-11T15:54:20.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Cash Sale',
            'amount': '13.00',
            'datetime': '2015-05-11T15:53:43.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Refund',
            'amount': '6.00000000000000000000',
            'datetime': '2015-05-11T15:42:11.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Cash Sale',
            'amount': '7.00',
            'datetime': '2015-05-11T15:41:00.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '1.06',
            'datetime': '2015-05-05T11:48:26.000Z',
            'cc_type': null,
            'customer_id': 2978,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.06000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '1.06',
            'datetime': '2015-04-07T19:54:33.000Z',
            'cc_type': null,
            'customer_id': 2978,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.06000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '6.06',
            'datetime': '2015-04-07T15:49:03.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.06000000000000000000'
          }, {
            'type': 'Cash Refund',
            'amount': '0.01000000000000000000',
            'datetime': '2015-03-18T19:22:22.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': null
          }, {
            'type': 'Cash Sale',
            'amount': '0.01',
            'datetime': '2015-03-11T20:16:42.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '1.05',
            'datetime': '2015-03-05T15:30:40.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.06000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '11.65',
            'datetime': '2015-02-26T20:03:57.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.66000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '6.35',
            'datetime': '2015-02-26T19:49:53.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.36000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '5.30',
            'datetime': '2015-02-26T19:49:13.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.30000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '2.11',
            'datetime': '2015-02-26T19:31:16.000Z',
            'cc_type': null,
            'customer_id': 2978,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.12000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '20.00',
            'datetime': '2015-02-26T19:19:46.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '20.00',
            'datetime': '2015-02-26T15:45:24.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '20.00',
            'datetime': '2015-02-25T19:44:41.000Z',
            'cc_type': null,
            'customer_id': 2978,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '40.10',
            'datetime': '2015-02-23T21:11:09.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '20.05',
            'datetime': '2015-02-23T20:37:01.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '20.05',
            'datetime': '2015-02-23T20:30:46.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '20.05',
            'datetime': '2015-02-23T20:29:11.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '20.05',
            'datetime': '2015-02-23T19:58:47.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '20.05',
            'datetime': '2015-02-23T19:06:30.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '61.75',
            'datetime': '2015-02-23T17:27:13.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '1.23000000000000000000'
          }, {
            'type': 'Cash Sale',
            'amount': '20.00',
            'datetime': '2015-02-19T21:21:02.000Z',
            'cc_type': null,
            'customer_id': null,
            'network': null,
            'tip_amount': null,
            'total_discount_amt': null,
            'tax_amt': '0.00000000000000000000'
          }],
          'items': [{'name': 'Taxes', 'quantity': '42'}, {'name': 'PayAnywhere', 'quantity': '39'}, {
            'name': 'Taxes',
            'quantity': '27'
          }, {'name': 'Tshirt', 'quantity': '14'}, {'name': 'Table', 'quantity': '11'}]
        }, 'status': 200
      },
      'transactionCount': [
        {'name': 'Credit Refund', 'count': 4},
        {'name': 'Credit Sale', 'count': 72},
        {'name': 'Cash Sale', 'count': 19},
        {'name': 'Cash Refund', 'count': 1},
        {'name': 'Void', 'count': 1}],
      'transactionCountPrevious': [
        {'name': 'Cash Sale', 'count': 80},
        {'name': 'Credit Sale', 'count': 35},
        {'name': 'Void', 'count': 17},
        {'name': 'Cash Refund', 'count': 27},
        {'name': 'Credit Refund', 'count': 3}],
      'netSales': 591.6399999999996,
      'netSalesPrevious': 731.7299999999998,
      'netSalesDifference': -0.23678250287336933,
      'voids': 0.01,
      'voidsCount': {'name': 'Void', 'count': 1},
      'refunds': 3.48,
      'averageSales': 4.1086111111111085,
      'averageSalesDifference': -1.5442382916252169,
      'averageSalesPrevious': 10.45328571428571
    }
  },
  auth: {isFetching: true, isAuthenticated: true, errorMessage: null},
  equipmentOrder: {isFetching: true},
  accountProfile: {
    data: {
      'id': 12345,
      'principal': 'Some Name',
      'principal_address': '20001 Test St.',
      'principal_address_2': 'Apt A',
      'principal_city': 'Testdale',
      'principal_state': 'MA',
      'principal_zip': '01913',
      'principal_phone': '5556667777',
      'business_name': 'The Testing Ctr.',
      'corp_name': 'The Testing Ctr',
      'business_desc': 'Testing Stuff',
      'business_type': 'LLC',
      'EIN': 'xxxxx1111',
      'monthly_volume': 'someValue',
      'avg_ticket': 'someValue',
      'account': 'xxxxxxxx2222',
      'routing_number': 'xxxxx3333',
      'business_address': '430 Test Rd',
      'business_address_2': 'Apt 3',
      'business_city': 'Testbury',
      'business_state': 'MA',
      'business_zip': '01950',
      'business_phone': '5557778888',
      'shipping_name': 'The Tesing Ctr.',
      'shipping_contact': 'Testy',
      'shipping_address_1': '430 N. Test Rd',
      'shipping_address_2': 'Ste 2',
      'shipping_city': 'Testbury',
      'shipping_state': 'MA',
      'shipping_zip': '01915'
    }
  },
  alerts: {
    data: {
      'alerts': [
        {'id': '88721', 'alert_name': 'daily_batch_activity_summary', 'target_value': null},
        {'id': '88722', 'alert_name': 'low_batch_activity_warning', 'target_value': null},
        {'id': '88723', 'alert_name': 'high_batch_activity_warning', 'target_value': null},
        {'id': '88724', 'alert_name': 'high_batch_volume', 'target_value': null},
        {'id': '88735', 'alert_name': 'low_batch_volume', 'target_value': null},
        {'id': '88736', 'alert_name': 'funding_summary_pa', 'target_value': null},
        {'id': '88737', 'alert_name': 'funding_summary_ps', 'target_value': null},
        {'id': '88738', 'alert_name': 'duplicate_transactions', 'target_value': null},
        {'id': '88739', 'alert_name': 'chargebacks', 'target_value': null},
        {'id': '88740', 'alert_name': 'retrievals', 'target_value': null},
        {'id': '1', 'alert_name': 'transaction_over', 'target_value': '2'},
        {'id': '2', 'alert_name': 'batch_over', 'target_value': '2'},
        {'id': '3', 'alert_name': 'batch_under', 'target_value': '2'},
        {'id': '4', 'alert_name': 'refund_transaction_over', 'target_value': '2'},
        {'id': '5', 'alert_name': 'batch_refunds_over', 'target_value': '2'},
        {'id': '6', 'alert_name': 'no_transaction_activity', 'target_value': '2'},
      ],
      'alert_to': 'no-reply@nabancard.com',
      'alert_cc': 'qa@nabancard.com'
    }
  },
  employees: {
    isFetching: false,
    selectedEmployee: {
      'id': 1468,
      'pid': 1123,
      'email_address': 'qa@oaso.com',
      'first_name': 'Qa',
      'last_name': 'Tester',
      'role': 'cashier',
      'last_login': '2016-12-14T04:11:37.000Z',
      'last_app_login': '2017-02-14T04:11:37.000Z',
      'phone_number': '2485555555',
      'added_by': null,
      'is_locked': false,
      'added_date': '2014-05-01T14:49:50.379Z',
      'updated_date': '2014-05-01T14:49:50.379Z'
    },
    data: [{
      'id': 1468,
      'pid': 1123,
      'email_address': 'qa@oaso.com',
      'first_name': 'Qa',
      'last_name': 'Tester',
      'role': 'administrator',
      'last_login': '2016-12-14T04:11:37.000Z',
      'last_app_login': '2017-02-14T04:11:37.000Z',
      'phone_number': '2485555555',
      'added_by': null,
      'is_locked': false,
      'is_active': true,
      'added_date': '2014-05-01T14:49:50.379Z',
      'updated_date': '2014-05-01T14:49:50.379Z'
    }, {
      'id': 207433,
      'pid': 206339,
      'email_address': 'lwang@nabancard.com',
      'first_name': 'bluefirst',
      'last_name': 'bluelast',
      'role': 'cashier',
      'last_login': null,
      'last_app_login': null,
      'phone_number': '3333333333',
      'added_by': 'qa@oaso.com',
      'is_locked': true,
      'is_active': true,
      'added_date': '2016-12-10T00:13:23.000Z',
      'updated_date': '2014-05-01T14:49:50.379Z'
    }, {
      'id': 207434,
      'pid': 206340,
      'email_address': 'cashier@null.com',
      'first_name': 'Matt',
      'last_name': 'test',
      'role': 'cashier',
      'last_login': null,
      'last_app_login': null,
      'phone_number': '4444444444',
      'added_by': 'qa@oaso.com',
      'is_locked': false,
      'is_active': true,
      'added_date': '2016-12-10T00:13:23.000Z',
      'updated_date': '2014-05-01T14:49:50.379Z'
    }, {
      'id': 207435,
      'pid': 206341,
      'email_address': 'cashier@Locked.com',
      'first_name': 'LockedTest',
      'last_name': 'test',
      'role': 'cashier',
      'last_login': null,
      'last_app_login': null,
      'phone_number': '5555555555',
      'added_by': 'qa@oaso.com',
      'is_locked': true,
      'is_active': true,
      'added_date': '2016-12-10T00:13:23.000Z',
      'updated_date': '2014-05-01T14:49:50.379Z'
    }, {
      'id': 207436,
      'pid': 206342,
      'email_address': 'cashier@isArchived.com',
      'first_name': 'isArchivedTest',
      'last_name': 'test',
      'role': 'isArchived',
      'last_login': null,
      'last_app_login': null,
      'phone_number': '666666666',
      'added_by': 'qa@oaso.com',
      'is_locked': true,
      'is_active': false,
      'added_date': '2016-12-10T00:13:23.000Z',
      'updated_date': '2014-05-01T14:49:50.379Z'
    }],
    filteredData: [{
      'id': 1468,
      'pid': 1123,
      'email_address': 'qa@oaso.com',
      'first_name': 'Qa',
      'last_name': 'Tester',
      'role': 'administrator',
      'last_login': '2016-12-14T04:11:37.000Z',
      'last_app_login': null,
      'phone_number': '2485555555',
      'added_by': null,
      'is_locked': false,
      'added_date': '2014-05-01T14:49:50.379Z',
      'updated_date': '2014-05-01T14:49:50.379Z'
    }, {
      'id': 207433,
      'pid': 206339,
      'email_address': 'lwang@nabancard.com',
      'first_name': 'bluefirst',
      'last_name': 'bluelast',
      'role': 'cashier',
      'last_login': null,
      'last_app_login': null,
      'phone_number': '3333333333',
      'added_by': 'qa@oaso.com',
      'is_locked': true,
      'added_date': '2016-12-10T00:13:23.000Z',
      'updated_date': '2014-05-01T14:49:50.379Z'
    },
      {
        'id': 207434,
        'pid': 206340,
        'email_address': 'cashier@null.com',
        'first_name': 'Matt',
        'last_name': 'test',
        'role': 'cashier',
        'last_login': null,
        'last_app_login': null,
        'phone_number': '4444444444',
        'added_by': 'qa@oaso.com',
        'is_locked': false,
        'added_date': '2016-12-10T00:13:23.000Z',
        'updated_date': '2014-05-01T14:49:50.379Z'
      }, {
        'id': 207435,
        'pid': 206341,
        'email_address': 'cashier@Locked.com',
        'first_name': 'LockedTest',
        'last_name': 'test',
        'role': 'cashier',
        'last_login': null,
        'last_app_login': null,
        'phone_number': '5555555555',
        'added_by': 'qa@oaso.com',
        'is_locked': null,
        'added_date': '2016-12-10T00:13:23.000Z',
        'updated_date': '2014-05-01T14:49:50.379Z'
      },
      {
        'id': 207436,
        'pid': 206342,
        'email_address': 'cashier@isArchived.com',
        'first_name': 'isArchivedTest',
        'last_name': 'test',
        'role': 'isArchived',
        'last_login': null,
        'last_app_login': null,
        'phone_number': '666666666',
        'added_by': 'qa@oaso.com',
        'is_locked': true,
        'is_active': false,
        'added_date': '2016-12-10T00:13:23.000Z',
        'updated_date': '2014-05-01T14:49:50.379Z'
      }],
  },
  forms: {
    data: [
      {
        link: 'https://tools.mybizperks.com/mbp_load_1099k.php?page=8788620006448_2013.pdf&check=9148215acde79b971e24d877887f5e29',
        file: '8788620006448_2013.pdf'
      }
    ]
  },
  referrals: {
    data: [
      {
        'id': 32,
        'email_address': 'someone@aol.com',
        'date_sent': '2016-02-04T01:12:08.000Z',
        'payout_amount': null,
        'payout_date': null
      },
      {
        'id': 33,
        'email_address': 'no-reply@nabancard.com',
        'date_sent': '2016-02-04T05:04:10.000Z',
        'payout_amount': 50,
        'payout_date': '2016-03-16T10:04:10.000Z'
      },
      {
        'id': 35,
        'email_address': 'someblock@hotmail.com',
        'date_sent': '2016-03-04T01:12:08.000Z',
        'payout_amount': null,
        'payout_date': null
      },
      {
        'id': 38,
        'email_address': 'thisguy@gmail.com',
        'date_sent': '2016-02-04T01:12:08.000Z',
        'payout_amount': 50,
        'payout_date': '2016-04-04T01:12:08.000Z'
      }
    ]
  },
  reports: {
    data: {
      'categorySales': [{
        'name': 'Best',
        'sold': 5,
        'total': 7.5,
        'transactions': [{'name': 'Pineapple - Base Price', 'sold': 5, 'total': 7.5}]
      }, {
        'name': 'Snacks',
        'sold': 6,
        'total': 13.75,
        'transactions': [{'name': 'Pretzels - Base Price', 'sold': 3, 'total': 7.5}, {
          'name': 'Coffee Cups - Small',
          'sold': 3,
          'total': 6.25
        }]
      }, {'name': 'null', 'sold': 26, 'total': 0, 'transactions': []}, {
        'name': 'Fruit',
        'sold': 8,
        'total': 5.1899999999999995,
        'transactions': [{'name': 'Coffee - Small', 'sold': 2, 'total': 2.25}, {
          'name': 'Watermelon - Base Price',
          'sold': 1,
          'total': 1.25
        }, {'name': 'Oranges - Base Price', 'sold': 3, 'total': 0.8999999999999999}, {
          'name': 'Apple - Base Price',
          'sold': 1,
          'total': 0.25
        }, {'name': 'Bananas - Base Price', 'sold': 1, 'total': 0.54}]
      }, {
        'name': 'Beagles',
        'sold': 5,
        'total': 7.035,
        'transactions': [{'name': 'Coffee - Small', 'sold': 2, 'total': 2.25}, {
          'name': 'Felicia The Cat - Sale',
          'sold': 2,
          'total': 1.98
        }, {'name': 'AAame - base', 'sold': 1, 'total': 2.805}]
      }, {
        'name': 'The Best Stuff',
        'sold': 1,
        'total': 1.1,
        'transactions': [{'name': 'Another Item - Another Price', 'sold': 1, 'total': 1.1}]
      }],
      'discounts': [{'name': 'Discount', 'sold': 7, 'total': -87.075}],
      'refunds': {'amount': 0, 'total': null},
      'voids': null,
      'unpaidAmount': null,
      'tips': {'amount': 1, 'total': 0.5},
      'tax': 122.64999999999999,
      'cash': {'amount': 10, 'total': 13.457},
      'creditCards': [{'name': 'Mastercard', 'sold': 24, 'total': 58.775999999999996}, {
        'name': 'Visa',
        'sold': 17,
        'total': 16.802
      }]
    },
    itemized: [{
      'item_name': 'Pineapple - Base Price',
      'item_quantity': 8,
      'price': '6.00000000000000000000',
      'discount_amt': 100,
      'discount_rate': 0.1,
      'tax_rate': 0.1,
      'total': 342.93500000000006
    }, {
      'item_name': 'Pretzels - Base Price',
      'item_quantity': null,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Bananas - Base Price',
      'item_quantity': 13,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Express Item - Base Price',
      'item_quantity': 12,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Coffee - Small',
      'item_quantity': 10,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'express - Base Price',
      'item_quantity': 1,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Express Item - Express Item',
      'item_quantity': 10,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Apple - Base Price',
      'item_quantity': 19,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Black Scorpion',
      'item_quantity': 3,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Captain Mako',
      'item_quantity': 2,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'City of Villains',
      'item_quantity': 3,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Ghost Widow',
      'item_quantity': 2,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Lord Recluse',
      'item_quantity': 3,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Positron',
      'item_quantity': 3,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Random',
      'item_quantity': 2,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Scirocco',
      'item_quantity': 2,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Sister Psyche',
      'item_quantity': 1,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Synapse',
      'item_quantity': 1,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Statesman',
      'item_quantity': 1,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Valkyrie',
      'item_quantity': 2,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Rain - raincoat',
      'item_quantity': 3,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Coffee Cups - Small',
      'item_quantity': 4,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Another Item - Another Price',
      'item_quantity': 1,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Watermelon - Base Price',
      'item_quantity': 3,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Felicia The Cat - Sale',
      'item_quantity': 2,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'ice creams - pint',
      'item_quantity': 1,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Epic Beard - base',
      'item_quantity': 1,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Oranges - Base Price',
      'item_quantity': 5,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Trans Test 1 - Base Price',
      'item_quantity': 1,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Trans Test 2 - Base Price',
      'item_quantity': 1,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'AAame - base',
      'item_quantity': 1,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Coffee - Medium',
      'item_quantity': 3,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Cherries - Express Item',
      'item_quantity': 1,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Popcorn - Small',
      'item_quantity': 1,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Smoothies - Small',
      'item_quantity': 1,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Express Item',
      'item_quantity': 1,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Express Sale',
      'item_quantity': 5,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Elminster ',
      'item_quantity': 1,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }, {
      'item_name': 'Minsc',
      'item_quantity': 1,
      'price': '6.00000000000000000000',
      'discount_amt': null,
      'discount_rate': null,
      'tax_rate': null,
      'total': 342.93500000000006
    }],
  },
  smsReceipt: {data: null},
  statements: {
    data: [
      {
        'backends': [
          'epx'
        ],
        'date': '2016-12-01',
        'urls': [
          'https://tools.mybizperks.com/mbp_statement_loader.php?REPORT_MONTH=12/01/2016&MERCHANT_ID=3130030859666&backend=epx&_c=97dbb2d741fc74a15a43148024c381a5&_bg=false'
        ]
      }
    ]
  },
  transactions: {
    isFetching: false,
    filteredData: [{
      'uniq_id': 'void_3243',
      'id': 3243,
      'type': 'Void',
      'amount': '11.00000000000000000000',
      'txn_source': 'PayAnywhere Portal',
      'datetime': '2015-05-13T15:41:24.000Z',
      'cc_type': null,
      'cc_last4': null,
      'cc_auth_code': null,
      'cc_status': 'APPROVED',
      'cc_name_on_card': null,
      'cc_signature_id': null,
      'receipt_id': null,
      'first_name': null,
      'last_name': null,
      'network': null,
      'parent_uniq_id': null,
      'parent_type': null,
      'void_uniq_id': null,
      'comment': null,
      'tip_amount': null,
      'tip_datetime': null,
      'discount_rate': null,
      'discount_amt': null,
      'total_discount_amt': null,
      'total_amt': null,
      'tax_amt': null,
      'sold_by': 'qa@oaso.com',
      'invoice': null,
      'item_names': null,
      'item_descs': null,
      'item_quantity': null,
      'item_unit_price': null,
      'item_discount_rate': null,
      'item_discount_amt': null,
      'item_tax_rate': null,
      'item_image_id': null,
      'item_ids': null,
      'mid': null,
    },
      {
        'uniq_id': 'ccs_44044',
        'txn_source': 'Phone Swipe Portal',
        'id': 44044,
        'type': 'Credit Sale',
        'amount': '1.09000000000000000000',
        'datetime': '2016-10-02T19:01:45.000Z',
        'cc_type': 'Swiped',
        'cc_last4': '6781',
        'cc_auth_code': '000037',
        'cc_status': 'APPROVED',
        'cc_name_on_card': 'GLOBAL PAYMENTS TEST CARD/',
        'cc_signature_id': 21404,
        'receipt_id': 83518,
        'first_name': 'Lucy',
        'last_name': 'McQuaid',
        'network': 'Visa',
        'parent_uniq_id': null,
        'parent_type': null,
        'void_uniq_id': null,
        'comment': null,
        'tip_amount': null,
        'tip_datetime': null,
        'discount_rate': 10,
        'discount_amt': 100,
        'state_tax': '6.82500000000000000000',
        'county_tax': '0.10000000000000000000',
        'city_tax': '0.20000000000000000000',
        'customized_tax': '0.00100000000000000000',
        'total_discount_amt': null,
        'total_amt': '1.09000000000000000000',
        'tax_amt': '0.00000000000000000000',
        'sold_by': 'mattTestSoldBy',
        'invoice': '333295',
        'item_names': ['blahTestItemMatt'],
        'item_descs': [],
        'item_quantity': [],
        'item_unit_price': [],
        'item_discount_rate': [],
        'item_discount_amt': [],
        'item_tax_rate': [],
        'item_image_id': [],
        'item_ids': [],
        'is_complete': false,
        'mid': 1234,
      },
      {
        'uniq_id': 'ccs_44043',
        'id': 44043,
        'type': 'Credit Sale',
        'is_debit': true,
        'amount': '1.09000000000000000000',
        'datetime': '2016-10-02T19:01:23.000Z',
        'cc_type': 'Swiped',
        'cc_last4': '0009',
        'cc_auth_code': null,
        'cc_status': 'DECLINED',
        'cc_name_on_card': 'TEST/MC ^25121010000000000',
        'cc_signature_id': null,
        'receipt_id': 83517,
        'first_name': null,
        'last_name': null,
        'network': 'Unknown (Central only)',
        'parent_uniq_id': null,
        'parent_type': null,
        'void_uniq_id': null,
        'comment': null,
        'tip_amount': null,
        'tip_datetime': null,
        'order_discount_rate': 0.1,
        'discount_amt': null,
        'total_discount_amt': null,
        'total_amt': '1.09000000000000000000',
        'tax_amt': '0.00000000000000000000',
        'sold_by': 'qa@oaso.com',
        'invoice': '333294',
        'item_names': [],
        'item_descs': [],
        'item_quantity': [],
        'item_unit_price': [],
        'item_discount_rate': [],
        'item_discount_amt': [],
        'item_tax_rate': [],
        'item_image_id': [],
        'item_ids': [],
        'mid': null,
      },
      {
        'uniq_id': 'ccs_44042',
        'id': 44042,
        'type': 'Credit Sale',
        'is_debit': true,
        'amount': '1.09000000000000000000',
        'datetime': '2016-10-02T19:01:02.000Z',
        'cc_type': 'Swiped',
        'cc_last4': '0009',
        'cc_auth_code': null,
        'cc_status': 'DECLINED',
        'cc_name_on_card': 'TEST/MC ^25121010000000000',
        'cc_signature_id': null,
        'receipt_id': 83516,
        'first_name': null,
        'last_name': null,
        'network': 'Unknown (Central only)',
        'parent_uniq_id': null,
        'parent_type': null,
        'void_uniq_id': null,
        'comment': null,
        'tip_amount': null,
        'tip_datetime': null,
        'discount_rate': null,
        'discount_amt': null,
        'total_discount_amt': null,
        'total_amt': '1.09000000000000000000',
        'tax_amt': '0.00000000000000000000',
        'sold_by': 'qa@oaso.com',
        'invoice': '333293',
        'item_names': [],
        'item_descs': [],
        'item_quantity': [],
        'item_unit_price': [],
        'item_discount_rate': [],
        'item_discount_amt': [],
        'item_tax_rate': [],
        'item_image_id': [],
        'item_ids': [],
        'mid': 5678,
      }, {
        'uniq_id': 'ccs_44042',
        'id': 44099,
        'type': 'Credit Sale - Split Payment',
        'is_debit': true,
        'amount': '1.09000000000000000000',
        'datetime': '2016-10-02T19:01:02.000Z',
        'cc_type': 'Swiped',
        'cc_last4': '0009',
        'cc_auth_code': null,
        'cc_status': 'DECLINED',
        'cc_name_on_card': 'TEST/MC ^25121010000000000',
        'cc_signature_id': null,
        'receipt_id': 83516,
        'first_name': null,
        'last_name': null,
        'network': 'Unknown (Central only)',
        'parent_uniq_id': null,
        'parent_type': null,
        'void_uniq_id': null,
        'comment': null,
        'tip_amount': null,
        'tip_datetime': null,
        'discount_rate': null,
        'discount_amt': null,
        'total_discount_amt': null,
        'total_amt': '1.09000000000000000000',
        'tax_amt': '0.00000000000000000000',
        'sold_by': 'qa@oaso.com',
        'invoice': '333293',
        'item_names': [],
        'item_descs': [],
        'item_quantity': [],
        'item_unit_price': [],
        'item_discount_rate': [],
        'item_discount_amt': [],
        'item_tax_rate': [],
        'item_image_id': [],
        'item_ids': [],
        'mid': 5678,
      }, {
        'uniq_id': 'ccs_19389',
        'id': 19389,
        'type': 'Credit Sale',
        'amount': '0.25000000000000000000',
        'datetime': '2015-06-25T19:21:43.000Z',
        'cc_type': 'Contactless',
        'cc_last4': '1307',
        'cc_auth_code': null,
        'cc_status': 'DECLINED',
        'cc_name_on_card': ' /',
        'cc_signature_id': null,
        'receipt_id': 54201,
        'first_name': null,
        'last_name': null,
        'network': 'Visa',
        'parent_uniq_id': null,
        'parent_type': null,
        'void_uniq_id': null,
        'comment': null,
        'tip_amount': null,
        'tip_datetime': null,
        'discount_rate': null,
        'discount_amt': null,
        'total_discount_amt': null,
        'total_amt': '0.25000000000000000000',
        'tax_amt': '0.00000000000000000000',
        'sold_by': null,
        'invoice': '302413',
        'item_names': [],
        'item_descs': [],
        'item_quantity': [],
        'item_unit_price': [],
        'item_discount_rate': [],
        'item_discount_amt': [],
        'item_tax_rate': [],
        'item_image_id': [],
        'item_ids': [],
        'mid': null,
      }, {
        'uniq_id': 'ccs_19388',
        'id': 19388,
        'type': 'Credit Sale',
        'amount': '0.25000000000000000000',
        'datetime': '2015-06-25T19:19:31.000Z',
        'cc_type': 'Contactless',
        'cc_last4': '1307',
        'cc_auth_code': null,
        'cc_status': 'DECLINED',
        'cc_name_on_card': ' /',
        'cc_signature_id': null,
        'receipt_id': 54200,
        'first_name': null,
        'last_name': null,
        'network': 'Visa',
        'parent_uniq_id': null,
        'parent_type': null,
        'void_uniq_id': null,
        'comment': null,
        'tip_amount': null,
        'tip_datetime': null,
        'discount_rate': null,
        'discount_amt': null,
        'total_discount_amt': null,
        'total_amt': '0.25000000000000000000',
        'tax_amt': '0.00000000000000000000',
        'sold_by': 'qa@oaso.com',
        'invoice': '302412',
        'item_names': [],
        'item_descs': [],
        'item_quantity': [],
        'item_unit_price': [],
        'item_discount_rate': [],
        'item_discount_amt': [],
        'item_tax_rate': [],
        'item_image_id': [],
        'item_ids': [],
        'mid': null,
      }, {
        'uniq_id': 'ccs_19387',
        'id': 19387,
        'type': 'Credit Sale',
        'amount': '0.25000000000000000000',
        'datetime': '2015-06-25T19:11:25.000Z',
        'cc_type': 'Contactless',
        'cc_last4': '1307',
        'cc_auth_code': null,
        'cc_status': 'DECLINED',
        'cc_name_on_card': ' /',
        'cc_signature_id': null,
        'receipt_id': 54199,
        'first_name': null,
        'last_name': null,
        'network': 'Visa',
        'parent_uniq_id': null,
        'parent_type': null,
        'void_uniq_id': null,
        'comment': null,
        'tip_amount': null,
        'tip_datetime': null,
        'discount_rate': null,
        'discount_amt': null,
        'total_discount_amt': null,
        'total_amt': '0.25000000000000000000',
        'tax_amt': '0.00000000000000000000',
        'sold_by': 'qa@oaso.com',
        'invoice': '302411',
        'item_names': [],
        'item_descs': [],
        'item_quantity': [],
        'item_unit_price': [],
        'item_discount_rate': [],
        'item_discount_amt': [],
        'item_tax_rate': [],
        'item_image_id': [],
        'item_ids': [],
        'mid': null,
      },
      {
        'uniq_id': 'void_3245',
        'id': 3245,
        'type': 'Void',
        'amount': '0.25000000000000000000',
        'datetime': '2015-05-13T15:42:12.000Z',
        'cc_type': null,
        'cc_last4': null,
        'cc_auth_code': null,
        'cc_status': 'APPROVED',
        'cc_name_on_card': null,
        'cc_signature_id': null,
        'receipt_id': null,
        'first_name': null,
        'last_name': null,
        'network': null,
        'parent_uniq_id': null,
        'parent_type': null,
        'void_uniq_id': null,
        'comment': null,
        'tip_amount': null,
        'tip_datetime': null,
        'discount_rate': null,
        'discount_amt': null,
        'total_discount_amt': null,
        'total_amt': '0.25000000000000000000',
        'tax_amt': null,
        'sold_by': 'qa@oaso.com',
        'invoice': null,
        'item_names': null,
        'item_descs': null,
        'item_quantity': null,
        'item_unit_price': null,
        'item_discount_rate': null,
        'item_discount_amt': null,
        'item_tax_rate': null,
        'item_image_id': null,
        'item_ids': null,
        'mid': null,
      },
      {
        'uniq_id': 'void_3244',
        'id': 3244,
        'type': 'Void',
        'amount': '0.25000000000000000000',
        'datetime': '2015-05-13T15:41:57.000Z',
        'cc_type': null,
        'cc_last4': null,
        'cc_auth_code': null,
        'cc_status': 'APPROVED',
        'cc_name_on_card': null,
        'cc_signature_id': null,
        'receipt_id': null,
        'first_name': null,
        'last_name': null,
        'network': null,
        'parent_uniq_id': null,
        'parent_type': null,
        'void_uniq_id': null,
        'comment': null,
        'tip_amount': null,
        'tip_datetime': null,
        'discount_rate': null,
        'discount_amt': null,
        'total_discount_amt': null,
        'total_amt': '0.25000000000000000000',
        'tax_amt': null,
        'sold_by': 'qa@oaso.com',
        'invoice': null,
        'item_names': null,
        'item_descs': null,
        'item_quantity': null,
        'item_unit_price': null,
        'item_discount_rate': null,
        'item_discount_amt': null,
        'item_tax_rate': null,
        'item_image_id': null,
        'item_ids': null,
        'mid': null,
      },
      {
        'uniq_id': 'void_3243',
        'id': 3243,
        'type': 'Void',
        'amount': '11.00000000000000000000',
        'datetime': '2015-05-13T15:41:24.000Z',
        'cc_type': null,
        'cc_last4': null,
        'cc_auth_code': null,
        'cc_status': 'APPROVED',
        'cc_name_on_card': null,
        'cc_signature_id': null,
        'receipt_id': null,
        'first_name': null,
        'last_name': null,
        'network': null,
        'parent_uniq_id': null,
        'parent_type': null,
        'void_uniq_id': null,
        'comment': null,
        'tip_amount': null,
        'tip_datetime': null,
        'discount_rate': null,
        'discount_amt': null,
        'total_discount_amt': null,
        'total_amt': '11.0000000000000000000',
        'tax_amt': null,
        'sold_by': 'qa@oaso.com',
        'invoice': null,
        'item_names': null,
        'item_descs': null,
        'item_quantity': null,
        'item_unit_price': null,
        'item_discount_rate': null,
        'item_discount_amt': null,
        'item_tax_rate': null,
        'item_image_id': null,
        'item_ids': null,
        'mid': null,
      }],
    receipts: [{
      'uniq_id': 'void_3243',
      'id': 3243,
      'type': 'Void',
      'amount': '11.00000000000000000000',
      'txn_source': 'PayAnywhere Portal',
      'datetime': '2015-05-13T15:41:24.000Z',
      'cc_type': null,
      'cc_last4': null,
      'cc_auth_code': null,
      'cc_status': 'APPROVED',
      'cc_name_on_card': null,
      'cc_signature_id': null,
      'receipt_id': null,
      'first_name': null,
      'last_name': null,
      'network': null,
      'parent_uniq_id': null,
      'parent_type': null,
      'void_uniq_id': null,
      'comment': null,
      'tip_amount': 0.43,
      'tip_datetime': null,
      'discount_rate': null,
      'discount_amt': null,
      'total_discount_amt': null,
      'total_amt': '11.00000000000000000000',
      'tax_amt': null,
      'sold_by': 'qa@oaso.com',
      'invoice': null,
      'item_names': null,
      'item_descs': null,
      'item_quantity': null,
      'item_unit_price': null,
      'item_discount_rate': null,
      'item_discount_amt': null,
      'item_tax_rate': null,
      'item_image_id': null,
      'item_ids': null,
      'mid': null,
    }, {
      'uniq_id': 'ccs_44044',
      'id': 44044,
      'txn_source': 'Phone Swipe Portal',
      'type': 'Credit Sale',
      'amount': '1.09000000000000000000',
      'datetime': '2016-10-02T19:01:45.000Z',
      'cc_type': 'Swiped',
      'cc_last4': '6781',
      'cc_auth_code': '000037',
      'cc_status': 'APPROVED',
      'cc_name_on_card': 'GLOBAL PAYMENTS TEST CARD/',
      'cc_signature_id': 21404,
      'receipt_id': 83518,
      'first_name': 'Lucy',
      'last_name': 'McQuaid',
      'network': 'Visa',
      'parent_uniq_id': null,
      'parent_type': null,
      'void_uniq_id': null,
      'comment': null,
      'tip_amount': null,
      'tip_datetime': null,
      'discount_rate': 10,
      'discount_amt': 100,
      'total_discount_amt': null,
      'total_amt': '1.09000000000000000000',
      'state_tax': '5.02500000000000000000',
      'county_tax': '0.10000000000000000000',
      'city_tax': '0.10000000000000000000',
      'customized_tax': '0.00100000000000000000',
      'tax_amt': '0.00000000000000000000',
      'sold_by': 'mattTestSoldBy',
      'invoice': '333295',
      'item_names': ['blahTestItemMatt'],
      'item_descs': [],
      'item_quantity': [],
      'item_unit_price': [],
      'item_discount_rate': [],
      'item_discount_amt': [],
      'item_tax_rate': [],
      'item_image_id': [],
      'item_ids': [],
      'mid': 1234,
      'customer_id': 123321
    }, {
      'uniq_id': 'ccs_44043',
      'id': 44043,
      'type': 'Credit Sale',
      'is_debit': true,
      'amount': '1.09000000000000000000',
      'datetime': '2016-10-02T19:01:23.000Z',
      'cc_type': 'Swiped',
      'cc_last4': '0009',
      'cc_auth_code': null,
      'cc_status': 'DECLINED',
      'cc_name_on_card': 'TEST/MC ^25121010000000000',
      'cc_signature_id': null,
      'receipt_id': 83517,
      'first_name': null,
      'last_name': null,
      'network': 'Unknown (Central only)',
      'parent_uniq_id': null,
      'parent_type': null,
      'void_uniq_id': null,
      'comment': null,
      'tip_amount': null,
      'tip_datetime': null,
      'discount_rate': null,
      'discount_amt': null,
      'total_discount_amt': -1.33,
      'total_amt': '1.09000000000000000000',
      'tax_amt': '0.00000000000000000000',
      'sold_by': 'qa@oaso.com',
      'invoice': '333294',
      'item_names': [],
      'item_descs': [],
      'item_quantity': [],
      'item_unit_price': [],
      'item_discount_rate': [],
      'item_discount_amt': [],
      'item_tax_rate': [],
      'item_image_id': [],
      'item_ids': [],
      'mid': null,
    }, {
      'uniq_id': 'ccs_44042',
      'id': 44042,
      'type': 'Credit Sale',
      'is_debit': true,
      'amount': '1.09000000000000000000',
      'datetime': '2016-10-02T19:01:02.000Z',
      'cc_type': 'Swiped',
      'cc_last4': '0009',
      'cc_auth_code': null,
      'cc_status': 'DECLINED',
      'cc_name_on_card': 'TEST/MC ^25121010000000000',
      'cc_signature_id': null,
      'receipt_id': 83516,
      'first_name': null,
      'last_name': null,
      'network': 'Unknown (Central only)',
      'parent_uniq_id': null,
      'parent_type': null,
      'void_uniq_id': null,
      'comment': null,
      'tip_amount': null,
      'tip_datetime': null,
      'discount_rate': null,
      'discount_amt': null,
      'total_discount_amt': null,
      'total_amt': '1.09000000000000000000',
      'tax_amt': '0.00000000000000000000',
      'sold_by': 'qa@oaso.com',
      'invoice': '333293',
      'item_names': [],
      'item_descs': [],
      'item_quantity': [],
      'item_unit_price': [],
      'item_discount_rate': [],
      'item_discount_amt': [],
      'item_tax_rate': [],
      'item_image_id': [],
      'item_ids': [],
      'mid': null,
    }, {
      'uniq_id': 'ccs_19389',
      'id': 19389,
      'type': 'Credit Sale',
      'is_debit': true,
      'amount': '0.25000000000000000000',
      'datetime': '2015-06-25T19:21:43.000Z',
      'cc_type': 'Contactless',
      'cc_last4': '1307',
      'cc_auth_code': null,
      'cc_status': 'DECLINED',
      'cc_name_on_card': ' /',
      'cc_signature_id': null,
      'receipt_id': 54201,
      'first_name': null,
      'last_name': null,
      'network': 'Visa',
      'parent_uniq_id': null,
      'parent_type': null,
      'void_uniq_id': null,
      'comment': null,
      'tip_amount': null,
      'tip_datetime': null,
      'discount_rate': null,
      'discount_amt': null,
      'total_discount_amt': null,
      'total_amt': '0.25000000000000000000',
      'tax_amt': '0.00000000000000000000',
      'sold_by': null,
      'invoice': '302413',
      'item_names': [],
      'item_descs': [],
      'item_quantity': [],
      'item_unit_price': [],
      'item_discount_rate': [],
      'item_discount_amt': [],
      'item_tax_rate': [],
      'item_image_id': [],
      'item_ids': [],
      'mid': null,
    }, {
      'uniq_id': 'ccs_19389',
      'id': 19301,
      'type': 'Credit Sale - Split Payment',
      'is_debit': true,
      'amount': '0.25000000000000000000',
      'datetime': '2015-06-25T19:21:43.000Z',
      'cc_type': 'Contactless',
      'cc_last4': '1307',
      'cc_auth_code': null,
      'cc_status': 'DECLINED',
      'cc_name_on_card': ' /',
      'cc_signature_id': null,
      'receipt_id': 54201,
      'first_name': null,
      'last_name': null,
      'network': 'Visa',
      'parent_uniq_id': null,
      'parent_type': null,
      'void_uniq_id': null,
      'comment': null,
      'tip_amount': null,
      'tip_datetime': null,
      'discount_rate': null,
      'discount_amt': null,
      'total_discount_amt': null,
      'total_amt': '0.25000000000000000000',
      'tax_amt': '0.00000000000000000000',
      'sold_by': null,
      'invoice': '302413',
      'item_names': [],
      'item_descs': [],
      'item_quantity': [],
      'item_unit_price': [],
      'item_discount_rate': [],
      'item_discount_amt': [],
      'item_tax_rate': [],
      'item_image_id': [],
      'item_ids': [],
      'mid': null,
    }, {
      'uniq_id': 'ccs_19388',
      'id': 19388,
      'type': 'Credit Sale',
      'amount': '0.25000000000000000000',
      'datetime': '2015-06-25T19:19:31.000Z',
      'cc_type': 'Contactless',
      'cc_last4': '1307',
      'cc_auth_code': null,
      'cc_status': 'DECLINED',
      'cc_name_on_card': ' /',
      'cc_signature_id': null,
      'receipt_id': 54200,
      'first_name': null,
      'last_name': null,
      'network': 'Visa',
      'parent_uniq_id': null,
      'parent_type': null,
      'void_uniq_id': null,
      'comment': null,
      'tip_amount': null,
      'tip_datetime': null,
      'discount_rate': null,
      'discount_amt': null,
      'total_discount_amt': null,
      'total_amt': '0.25000000000000000000',
      'tax_amt': '0.00000000000000000000',
      'sold_by': 'qa@oaso.com',
      'invoice': '302412',
      'item_names': [],
      'item_descs': [],
      'item_quantity': [],
      'item_unit_price': [],
      'item_discount_rate': [],
      'item_discount_amt': [],
      'item_tax_rate': [],
      'item_image_id': [],
      'item_ids': [],
      'mid': null,
    }, {
      'uniq_id': 'ccs_19387',
      'id': 19387,
      'type': 'Credit Sale',
      'amount': '0.25000000000000000000',
      'datetime': '2015-06-25T19:11:25.000Z',
      'cc_type': 'Contactless',
      'cc_last4': '1307',
      'cc_auth_code': null,
      'cc_status': 'DECLINED',
      'cc_name_on_card': ' /',
      'cc_signature_id': null,
      'receipt_id': 54199,
      'first_name': null,
      'last_name': null,
      'network': 'Visa',
      'parent_uniq_id': null,
      'parent_type': null,
      'void_uniq_id': null,
      'comment': null,
      'tip_amount': null,
      'tip_datetime': null,
      'discount_rate': null,
      'discount_amt': null,
      'total_discount_amt': null,
      'total_amt': '0.25000000000000000000',
      'tax_amt': '0.00000000000000000000',
      'sold_by': 'qa@oaso.com',
      'invoice': '302411',
      'item_names': [],
      'item_descs': [],
      'item_quantity': [],
      'item_unit_price': [],
      'item_discount_rate': [],
      'item_discount_amt': [],
      'item_tax_rate': [],
      'item_image_id': [],
      'item_ids': [],
      'mid': null,
    },
      {
        'uniq_id': 'void_3245',
        'id': 3245,
        'type': 'Void',
        'amount': '0.25000000000000000000',
        'datetime': '2015-05-13T15:42:12.000Z',
        'cc_type': null,
        'cc_last4': null,
        'cc_auth_code': null,
        'cc_status': 'APPROVED',
        'cc_name_on_card': null,
        'cc_signature_id': null,
        'receipt_id': null,
        'first_name': null,
        'last_name': null,
        'network': null,
        'parent_uniq_id': null,
        'parent_type': null,
        'void_uniq_id': null,
        'comment': null,
        'tip_amount': null,
        'tip_datetime': null,
        'discount_rate': null,
        'discount_amt': null,
        'total_discount_amt': null,
        'total_amt': '0.25000000000000000000',
        'tax_amt': null,
        'sold_by': 'qa@oaso.com',
        'invoice': null,
        'item_names': null,
        'item_descs': null,
        'item_quantity': null,
        'item_unit_price': null,
        'item_discount_rate': null,
        'item_discount_amt': null,
        'item_tax_rate': null,
        'item_image_id': null,
        'item_ids': null,
        'mid': null,
      },
      {
        'uniq_id': 'void_3244',
        'id': 3244,
        'type': 'Void',
        'amount': '0.25000000000000000000',
        'datetime': '2015-05-13T15:41:57.000Z',
        'cc_type': null,
        'cc_last4': null,
        'cc_auth_code': null,
        'cc_status': 'APPROVED',
        'cc_name_on_card': null,
        'cc_signature_id': null,
        'receipt_id': null,
        'first_name': null,
        'last_name': null,
        'network': null,
        'parent_uniq_id': null,
        'parent_type': null,
        'void_uniq_id': null,
        'comment': null,
        'tip_amount': null,
        'tip_datetime': null,
        'discount_rate': null,
        'discount_amt': null,
        'total_discount_amt': null,
        'total_amt': '0.25000000000000000000',
        'tax_amt': null,
        'sold_by': 'qa@oaso.com',
        'invoice': null,
        'item_names': null,
        'item_descs': null,
        'item_quantity': null,
        'item_unit_price': null,
        'item_discount_rate': null,
        'item_discount_amt': null,
        'item_tax_rate': null,
        'item_image_id': null,
        'item_ids': null,
        'mid': null,
      },
      {
        'uniq_id': 'preauth_3244',
        'id': 3244,
        'type': 'Pre Auth',
        'amount': '0.25000000000000000000',
        'datetime': '2015-05-13T15:41:57.000Z',
        'cc_type': null,
        'cc_last4': null,
        'cc_auth_code': null,
        'cc_status': 'APPROVED',
        'cc_name_on_card': null,
        'cc_signature_id': null,
        'receipt_id': null,
        'first_name': null,
        'last_name': null,
        'network': null,
        'parent_uniq_id': null,
        'parent_type': null,
        'void_uniq_id': null,
        'comment': null,
        'tip_amount': null,
        'tip_datetime': null,
        'discount_rate': null,
        'discount_amt': null,
        'total_discount_amt': null,
        'total_amt': '0.25000000000000000000',
        'tax_amt': null,
        'sold_by': 'qa@oaso.com',
        'invoice': null,
        'item_names': null,
        'item_descs': null,
        'item_quantity': null,
        'item_unit_price': null,
        'item_discount_rate': null,
        'item_discount_amt': null,
        'item_tax_rate': null,
        'item_image_id': null,
        'item_ids': null,
        'is_complete': false,
        'mid': null,
      },
      {
        'uniq_id': 'ccs_43443',
        'id': 43443,
        'type': 'Credit Sale',
        'amount': '2.22000000000000000000',
        'datetime': '2016-08-30T16:29:24.000Z',
        'cc_type': 'Swiped',
        'cc_last4': '6781',
        'cc_auth_code': '054891',
        'cc_status': 'APPROVED',
        'cc_name_on_card': 'GLOBAL PAYMENT TEST CARD/',
        'cc_signature_id': 20593,
        'receipt_id': 82936,
        'first_name': null,
        'last_name': null,
        'network': 'Mastercard',
        'parent_uniq_id': null,
        'parent_type': null,
        'void_uniq_id': null,
        'comment': null,
        'tip_amount': null,
        'tip_datetime': null,
        'discount_rate': null,
        'discount_amt': null,
        'total_discount_amt': null,
        'tax_amt': '0.00000000000000000000',
        'total_amt': '2.22000000000000000000',
        'sold_by': 'btell',
        'invoice': '331202',
        'item_names': ['Express Item - Base Price'],
        'item_descs': [''],
        'item_quantity': [1],
        'item_unit_price': [2.22],
        'item_discount_rate': [null],
        'item_discount_amt': [null],
        'item_tax_rate': [null],
        'item_image_id': [null],
        'item_ids': [null],
        'mid': null,
      }, {
        'uniq_id': 'car_2813',
        'id': 2813,
        'type': 'Cash Refund',
        'amount': '1.06000000000000000000',
        'datetime': '2016-05-20T13:53:53.000Z',
        'cc_type': null,
        'cc_last4': null,
        'cc_auth_code': null,
        'cc_status': null,
        'cc_name_on_card': null,
        'cc_signature_id': null,
        'receipt_id': null,
        'first_name': null,
        'last_name': null,
        'network': null,
        'parent_uniq_id': 'cas_10414',
        'parent_type': 'Cash Sale',
        'void_uniq_id': null,
        'comment': null,
        'tip_amount': null,
        'tip_datetime': null,
        'discount_rate': null,
        'discount_amt': null,
        'total_discount_amt': null,
        'total_amt': '1.06000000000000000000',
        'tax_amt': null,
        'sold_by': 'btell',
        'invoice': null,
        'item_names': null,
        'item_descs': null,
        'item_quantity': null,
        'item_unit_price': null,
        'item_discount_rate': null,
        'item_discount_amt': null,
        'item_tax_rate': null,
        'item_image_id': null,
        'item_ids': null,
        'mid': null,
      }, {
        'uniq_id': 'ccr_4960',
        'id': 4960,
        'type': 'Credit Refund',
        'amount': '2.22000000000000000000',
        'datetime': '2016-09-09T18:37:26.000Z',
        'cc_type': null,
        'cc_last4': null,
        'cc_auth_code': '656932',
        'cc_status': 'APPROVED',
        'cc_name_on_card': null,
        'cc_signature_id': null,
        'receipt_id': null,
        'first_name': null,
        'last_name': null,
        'network': null,
        'parent_uniq_id': 'ccs_43443',
        'parent_type': 'Credit Sale',
        'void_uniq_id': null,
        'comment': null,
        'tip_amount': null,
        'tip_datetime': null,
        'discount_rate': null,
        'discount_amt': null,
        'total_discount_amt': null,
        'total_amt': '2.22000000000000000000',
        'tax_amt': null,
        'sold_by': 'btell',
        'invoice': null,
        'item_names': null,
        'item_descs': null,
        'item_quantity': null,
        'item_unit_price': null,
        'item_discount_rate': null,
        'item_discount_amt': null,
        'item_tax_rate': null,
        'item_image_id': null,
        'item_ids': null,
        'mid': null,
      },
      {
        'uniq_id': 'cas_10414',
        'id': 10414,
        'type': 'Cash Sale',
        'amount': '1.06',
        'datetime': '2016-05-20T13:50:19.000Z',
        'cc_type': null,
        'cc_last4': null,
        'cc_auth_code': null,
        'cc_status': null,
        'cc_name_on_card': null,
        'cc_signature_id': null,
        'receipt_id': 73759,
        'first_name': 'TEst',
        'last_name': 'Wardzinski',
        'network': null,
        'parent_uniq_id': null,
        'parent_type': null,
        'void_uniq_id': null,
        'comment': 'This is a $0.99 transaction with 6% tax',
        'tip_amount': null,
        'tip_datetime': null,
        'order_discount_rate': 0.2,
        'discount_amt': null,
        'total_discount_amt': null,
        'total_amt': '1.06000000000000000000',
        'tax_amt': '0.07000000000000000000',
        'sold_by': 'btell',
        'invoice': '324424',
        'item_names': ['Express Item - Base Price'],
        'item_descs': [''],
        'item_quantity': [1],
        'item_unit_price': [0.99],
        'item_discount_rate': [null],
        'item_discount_amt': [null],
        'item_tax_rate': [6.666],
        'item_image_id': [null],
        'item_ids': [null],
        'mid': null,
      }],
    selectedReceipt: {
      'uniq_id': 'ccs_19389',
      'id': 19389,
      'type': 'Credit Sale',
      'amount': '0.25000000000000000000',
      'datetime': '2015-06-25T19:21:43.000Z',
      'cc_type': 'Contactless',
      'cc_last4': '1307',
      'cc_auth_code': null,
      'cc_status': 'DECLINED',
      'cc_name_on_card': ' /',
      'cc_signature_id': null,
      'receipt_id': 54201,
      'first_name': null,
      'last_name': null,
      'network': 'Visa',
      'parent_uniq_id': null,
      'parent_type': null,
      'void_uniq_id': null,
      'comment': null,
      'tip_amount': null,
      'tip_datetime': null,
      'order_discount_rate': 2.0,
      'discount_amt': null,
      'total_discount_amt': -0.5,
      'total_amt': '0.25000000000000000000',
      'tax_amt': '0.00000000000000000000',
      'sold_by': 'qa@oaso.com',
      'invoice': '302413',
      'email_addresses': [],
      'item_names': [],
      'item_descs': [],
      'item_quantity': [],
      'item_unit_price': [],
      'item_discount_rate': [],
      'item_discount_amt': [],
      'item_tax_rate': [],
      'item_image_id': [],
      'item_ids': [],
      'receipt_discount_type': ['Percentage'],
      'receipt_discount_name': ['CoolDiscount'],
      'receipt_discount_amt': [0.5],
      'receipt_discount_info': ['{\"percentage\":\"20.00\"}'],
      'mid': null,
    }
  },
  merchantSettings: {
    user_settings: {
      is_auto_generated_invoice_numbers_enabled: true,
      is_geotax_enabled: true,
      taxRate: 6.00,
      autoInvoiceEnabled: false
    },
    expressItemDefaultTaxable: true,
    express_category_enabled: true
  },
  geoTax: {
    location: {
      latitude: -80,
      longitude: 100
    },
    data: {
      state: '0.06',
      county: '0.123',
      city: '0.78',
    }
  },
  salesItemImages: {
    data: {
      1: {
        entity_name: 'sales_item',
        image_data: 'base64imagesarereallyreallylong',
        image_id: 1,
      }
    }
  },
  customers: {
    isFetching: false,
    selectedCustomer: {
      email_addresses: ['no-reply@nabancard.com', 'no-reply@nabancard.com'],
      first_name: 'Testy',
      id: 123,
      last_name: 'McTestface'
    }
    ,
    data: [
      {
        email_addresses: ['no-reply@nabancard.com', 'no-reply@nabancard.com'],
        first_name: 'Testy',
        id: 123,
        last_name: 'McTestface'
      },
      {email_addresses: [], first_name: 'No Email', id: 333, last_name: 'Lasty', phone_number: '5551234567'},
      {email_addresses: ['nofirst@blah.com'], first_name: '', id: 666, last_name: 'NoFirst'},
      {first_name: '', id: 676, last_name: 'NoFirst'},
      {email_addresses: ['nolast@blah.com'], first_name: 'NoLast', id: 777, last_name: ''},
    ],
    filteredData: [
      {
        email_addresses: ['no-reply@nabancard.com', 'no-reply@nabancard.com', 'no-reply@nabancard.com'],
        first_name: 'Testy',
        id: 123,
        last_name: 'McTestface'
      },
      {email_addresses: [], first_name: 'No Email', id: 333, last_name: 'Lasty', phone_number: '5551234567'},
      {email_addresses: ['nofirst@blah.com'], first_name: '', id: 666, last_name: 'NoFirst'},
      {email_addresses: [], first_name: '', id: 676, last_name: 'NoFirst'},
      {email_addresses: ['nolast@blah.com'], first_name: 'NoLast', id: 777, last_name: ''},
    ]
  },
  newItem: {
    option_set_ids: [],
    name: '',
    is_taxable: false,
    is_favorite: false,
    categories: [],
    details: {}
  },
  virtualTerminal: {
    initialValues: {
      invoice_number: '8675309',
      card_number: '4003-0000-1122-3344', // (test card #)
      expiration_date: '11/22',
      street_number: '55555',
      cvv: '123',
      zip: 90210,
      cardType: 'visa',
      tax: true
    },
    isAmex: false,
    tax: null,
    taxRate: null,
    emailOrMobile: [],
    location: null,
  },
  taxes: {
    taxRate: 6,
    geoLocation: {
      latitude: -88,
      longitude: 111
    }
  },
  items: {
    isFetching: false,
    taxRate: 5.5,
    geoTaxEnabled: false,
    salesItems: [
      {
        'option_set_ids': [1632],
        'id': 948,
        'description': 'Sandwiches are tasty',
        'name': 'Widget Sandwich',
        'is_taxable': false,
        'is_favorite': false,
        'is_active': true,
        'image_id': 1,
        'categories': [
          {
            'id': 2652,
            'name': 'Ginger',
            'color': '178aeb',
            'is_active': true
          }
        ],
        'details': {
          'prices': [
            {
              'id': 606,
              'name': 'Base Price',
              'price': '0.25000000000000000000',
              'barcode': '4444',
              'sales_item_id': 948,
              'quantity': 1,
              'stock_enabled': true
            },
            {
              'id': 616,
              'name': 'Different Price',
              'price': '0.50000000000000000000',
              'barcode': '5555',
              'sales_item_id': 948,
              'quantity': 0,
              'stock_enabled': true
            },
            {
              'id': 626,
              'name': 'Full Price',
              'price': '0.10000000000000000000',
              'barcode': '1234',
              'sales_item_id': 948,
              'quantity': -1,
              'stock_enabled': false
            }
          ],
          'modifierSets': [
            {
              'id': 1632,
              'name': 'Aaaaaaaaaa',
              'can_select_multiple': false,
              'count': 3,
              'isSelected': true
            },
            {
              'id': 1633,
              'name': 'Bbbbb',
              'can_select_multiple': false,
              'count': 4,
              'isSelected': false
            }
          ]
        }
      },
      {
        'option_set_ids': [1632],
        'id': 949,
        'name': 'Another Name',
        'is_taxable': true,
        'is_favorite': true,
        'is_active': true,
        'image_id': 2,
        'categories': [
          {
            'id': 2652,
            'name': 'Ginger',
            'color': '178aeb',
            'is_active': true
          }
        ],
        'details': {
          'prices': [
            {
              'id': 606,
              'name': 'Base Price',
              'price': '0.25000000000000000000',
              'sales_item_id': 949,
              'quantity': 8,
              'stock_enabled': true
            }
          ],
          'modifierSets': [
            {
              'id': 1632,
              'name': 'Aaaaaaaaaa',
              'can_select_multiple': false,
              'count': 3
            },
            {
              'id': 1633,
              'name': 'Bbbbb',
              'can_select_multiple': false,
              'count': 4,
              'isSelected': false
            }
          ],
          'thumbnail': 'base64imagesarereallyreallylong'
        }
      },
      {
        option_set_ids: [],
        name: 'Third',
        is_taxable: false,
        is_favorite: false,
        categories: [],
        details: {
          prices: [
            {
              'id': 606,
              'name': 'Base Price',
              'price': '0.00000000000000000000',
              'sales_item_id': 949
            }
          ],
          modifierSets: []
        }
      }
    ],
    prices: [{
      'id': 606,
      'name': 'Base Price',
      'price': '0.25000000000000000000',
      'barcode': '4444',
      'sales_item_id': 948,
      'quantity': 1,
      'stock_enabled': true
    },
      {
        'id': 616,
        'name': 'Different Price',
        'price': '0.50000000000000000000',
        'barcode': '5555',
        'sales_item_id': 948,
        'quantity': 0,
        'stock_enabled': true
      },
      {
        'id': 626,
        'name': 'Full Price',
        'price': '0.10000000000000000000',
        'barcode': '1234',
        'sales_item_id': 948,
        'quantity': -1,
        'stock_enabled': false
      }],
    filteredItems: [],
    categories: [
      {
        'id': 2652,
        'name': 'Ginger',
        'is_active': true,
        'color': 'a4dd36'
      },
      {
        'id': 5690,
        'name': 'Thyme',
        'is_active': true,
        'color': '1a9bf7'
      },
      {
        'id': 5691,
        'name': 'Basil',
        'is_active': true
      }
    ],
    filteredCategories: [],
    discounts: [
      {
        'id': 1673,
        'name': 'Senior',
        'color': '95e3fc',
        'type': 'percent',
        'amount': 0.00,
        'percentage': 50
      },
      {
        'id': 1675,
        'name': 'Children',
        'type': 'amount',
        'amount': 8.00,
        'percentage': 0
      }
    ],
    filteredDiscounts: [],
    newModifierSet: {
      name: '',
      can_select_multiple: false,
      modifiers: []
    },
    modifierSets: [
      {
        'id': 1645,
        'name': 'New',
        'can_select_multiple': false,
        'count': 3,
        'modifiers': [
          {
            'id': 3601,
            'price': '0.00000000000000000000',
            'option_set_id': 1645,
            'option_id': 4159,
            'name': 'Gummy'
          },
          {
            'id': 3602,
            'price': '0.00000000000000000000',
            'option_set_id': 1645,
            'option_id': 4160,
            'name': 'Chewey'
          },
          {
            'price': '0.00000000000000000000',
            'name': 'Crunchy'
          }
        ]
      }
    ],
    filteredModifiers: [],
    modifiers: [
      {
        id: 4159,
        name: 'Gummy'
      },
      {
        id: 4160,
        name: 'Chewey'
      },
      {
        id: 4161,
        name: 'Crunchy'
      },
      {
        id: 4162,
        name: 'Gooey'
      },
      {
        id: 4163,
        name: 'Slimey'
      }
    ]
  },
  discounts: [
    {
      'id': 1673,
      'name': 'Jrif',
      'color': '95e3fc',
      'type': 'percent',
      'percentage': 50,
      'amount': 0
    },
    {
      'id': 1675,
      'name': 'Ploiuy',
      'type': 'flat',
      'percentage': 0,
      'amount': 8
    }
  ],
  deposits: {
    isFetching: false,
    selectedDeposit: {
      'id': 77889934,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-07T03:00:00.000Z',
      'amount_to_clear': 389.73,
      'ndf': 0,
      'type': 'deposit',
      'deposit_date': '2016-10-06T04:00:00.000Z'
    },
    data: [{
      'uniq_id': 'gs_1245189',
      'id': 1245189,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-09-30T03:00:00.000Z',
      'amount_to_clear': 202.89,
      'ndf': 0,
      'type': 'Deposit',
      'deposit_date': '2016-09-29T04:00:00.000Z'
    }, {
      'uniq_id': 'gs_1245191',
      'id': 1245191,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-09-30T03:00:00.000Z',
      'amount_to_clear': 122.89,
      'ndf': 0,
      'type': 'Deposit',
      'deposit_date': '2016-09-29T04:00:00.000Z'
    }, {
      'uniq_id': 'gs_1300495',
      'id': 1300495,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-01T03:00:00.000Z',
      'amount_to_clear': 30,
      'ndf': 0,
      'type': 'Deposit',
      'deposit_date': '2016-09-30T04:00:00.000Z'
    }, {
      'uniq_id': 'gs_1300497',
      'id': 1300497,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-01T03:00:00.000Z',
      'amount_to_clear': 80,
      'ndf': 0,
      'type': 'Deposit',
      'deposit_date': '2016-09-30T04:00:00.000Z'
    }, {
      'uniq_id': 'gs_1446880',
      'id': 1446880,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-04T03:00:00.000Z',
      'amount_to_clear': 240,
      'ndf': 0,
      'type': 'Deposit',
      'deposit_date': '2016-10-03T04:00:00.000Z'
    }, {
      'uniq_id': 'gs_1446882',
      'id': 1446882,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-04T03:00:00.000Z',
      'amount_to_clear': 187.89,
      'ndf': 0,
      'type': 'Deposit',
      'deposit_date': '2016-10-03T04:00:00.000Z'
    }, {
      'uniq_id': 'gs_1446884',
      'id': 1446884,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-04T03:00:00.000Z',
      'amount_to_clear': 152.16,
      'ndf': 0,
      'type': 'Withdrawal',
      'deposit_date': '2016-10-03T04:00:00.000Z'
    }, {
      'uniq_id': 'gs_77889934',
      'id': 77889934,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-07T03:00:00.000Z',
      'amount_to_clear': 389.73,
      'ndf': 0,
      'type': 'Deposit',
      'deposit_date': '2016-10-06T04:00:00.000Z'
    }, {
      'uniq_id': 'gs_77889936',
      'id': 77889936,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-07T03:00:00.000Z',
      'amount_to_clear': 247,
      'ndf': 0,
      'type': 'Deposit',
      'deposit_date': '2016-10-06T04:00:00.000Z'
    }, {
      'uniq_id': 'gs_77943593',
      'id': 77943593,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-08T03:00:00.000Z',
      'amount_to_clear': 140,
      'ndf': 0,
      'type': 'Deposit',
      'deposit_date': '2016-10-07T04:00:00.000Z'
    }, {
      'uniq_id': 'gs_77943595',
      'id': 77943595,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-08T03:00:00.000Z',
      'amount_to_clear': 145,
      'ndf': 0,
      'type': 'Deposit',
      'deposit_date': '2016-10-07T04:00:00.000Z'
    }, {
      'uniq_id': 'gc_1245190',
      'id': 1245190,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-09-30T03:00:00.000Z',
      'amount_to_clear': 6.44,
      'ndf': 0,
      'type': 'Processing Fee',
      'deposit_date': '2016-09-29T04:00:00.000Z'
    }, {
      'uniq_id': 'gc_1245192',
      'id': 1245192,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-09-30T03:00:00.000Z',
      'amount_to_clear': 0.9,
      'ndf': 0,
      'type': 'Processing Fee',
      'deposit_date': '2016-09-29T04:00:00.000Z'
    }, {
      'uniq_id': 'gc_1300496',
      'id': 1300496,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-01T03:00:00.000Z',
      'amount_to_clear': 1.08,
      'ndf': 0,
      'type': 'Processing Fee',
      'deposit_date': '2016-09-30T04:00:00.000Z'
    }, {
      'uniq_id': 'gc_1300498',
      'id': 1300498,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-01T03:00:00.000Z',
      'amount_to_clear': 0.3,
      'ndf': 0,
      'type': 'Processing Fee',
      'deposit_date': '2016-09-30T04:00:00.000Z'
    }, {
      'uniq_id': 'gc_1446881',
      'id': 1446881,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-04T03:00:00.000Z',
      'amount_to_clear': 1.65,
      'ndf': 0,
      'type': 'Processing Fee',
      'deposit_date': '2016-10-03T04:00:00.000Z'
    }, {
      'uniq_id': 'gc_1446883',
      'id': 1446883,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-04T03:00:00.000Z',
      'amount_to_clear': 5.89,
      'ndf': 0,
      'type': 'Processing Fee',
      'deposit_date': '2016-10-03T04:00:00.000Z'
    }, {
      'uniq_id': 'gc_77889935',
      'id': 77889935,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-07T03:00:00.000Z',
      'amount_to_clear': 1.95,
      'ndf': 0,
      'type': 'Processing Fee',
      'deposit_date': '2016-10-06T04:00:00.000Z'
    }, {
      'uniq_id': 'gc_77889937',
      'id': 77889937,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-07T03:00:00.000Z',
      'amount_to_clear': 7.48,
      'ndf': 0,
      'type': 'Processing Fee',
      'deposit_date': '2016-10-06T04:00:00.000Z'
    }, {
      'uniq_id': 'gc_77943594',
      'id': 77943594,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-08T03:00:00.000Z',
      'amount_to_clear': 0.6,
      'ndf': 0,
      'type': 'Processing Fee',
      'deposit_date': '2016-10-07T04:00:00.000Z'
    }, {
      'uniq_id': 'gc_77943596',
      'id': 77943596,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-08T03:00:00.000Z',
      'amount_to_clear': 4.21,
      'ndf': 0,
      'type': 'Processing Fee',
      'deposit_date': '2016-10-07T04:00:00.000Z'
    }],
    filteredData: [{
      'uniq_id': 'gs_1245189',
      'id': 1245189,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-09-30T03:00:00.000Z',
      'amount_to_clear': 202.89,
      'ndf': 0,
      'type': 'Deposit',
      'deposit_date': '2016-09-29T04:00:00.000Z'
    }, {
      'uniq_id': 'gs_1245191',
      'id': 1245191,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-09-30T03:00:00.000Z',
      'amount_to_clear': 122.89,
      'ndf': 0,
      'type': 'Deposit',
      'deposit_date': '2016-09-29T04:00:00.000Z'
    }, {
      'uniq_id': 'gs_1300495',
      'id': 1300495,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-01T03:00:00.000Z',
      'amount_to_clear': 30,
      'ndf': 0,
      'type': 'Deposit',
      'deposit_date': '2016-09-30T04:00:00.000Z'
    }, {
      'uniq_id': 'gs_1300497',
      'id': 1300497,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-01T03:00:00.000Z',
      'amount_to_clear': 80,
      'ndf': 0,
      'type': 'Deposit',
      'deposit_date': '2016-09-30T04:00:00.000Z'
    }, {
      'uniq_id': 'gs_1446880',
      'id': 1446880,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-04T03:00:00.000Z',
      'amount_to_clear': 240,
      'ndf': 0,
      'type': 'Deposit',
      'deposit_date': '2016-10-03T04:00:00.000Z'
    }, {
      'uniq_id': 'gs_1446882',
      'id': 1446882,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-04T03:00:00.000Z',
      'amount_to_clear': 187.89,
      'ndf': 0,
      'type': 'Deposit',
      'deposit_date': '2016-10-03T04:00:00.000Z'
    }, {
      'uniq_id': 'gs_1446884',
      'id': 1446884,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-04T03:00:00.000Z',
      'amount_to_clear': 152.16,
      'ndf': 0,
      'type': 'Withdrawal',
      'deposit_date': '2016-10-03T04:00:00.000Z'
    }, {
      'uniq_id': 'gs_77889934',
      'id': 77889934,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-07T03:00:00.000Z',
      'amount_to_clear': 389.73,
      'ndf': 0,
      'type': 'Deposit',
      'deposit_date': '2016-10-06T04:00:00.000Z'
    }, {
      'uniq_id': 'gs_77889936',
      'id': 77889936,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-07T03:00:00.000Z',
      'amount_to_clear': 247,
      'ndf': 0,
      'type': 'Deposit',
      'deposit_date': '2016-10-06T04:00:00.000Z'
    }, {
      'uniq_id': 'gs_77943593',
      'id': 77943593,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-08T03:00:00.000Z',
      'amount_to_clear': 140,
      'ndf': 0,
      'type': 'Deposit',
      'deposit_date': '2016-10-07T04:00:00.000Z'
    }, {
      'uniq_id': 'gs_77943595',
      'id': 77943595,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-08T03:00:00.000Z',
      'amount_to_clear': 145,
      'ndf': 0,
      'type': 'Deposit',
      'deposit_date': '2016-10-07T04:00:00.000Z'
    }, {
      'uniq_id': 'gc_1245190',
      'id': 1245190,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-09-30T03:00:00.000Z',
      'amount_to_clear': 6.44,
      'ndf': 0,
      'type': 'Processing Fee',
      'deposit_date': '2016-09-29T04:00:00.000Z'
    }, {
      'uniq_id': 'gc_1245192',
      'id': 1245192,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-09-30T03:00:00.000Z',
      'amount_to_clear': 0.9,
      'ndf': 0,
      'type': 'Processing Fee',
      'deposit_date': '2016-09-29T04:00:00.000Z'
    }, {
      'uniq_id': 'gc_1300496',
      'id': 1300496,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-01T03:00:00.000Z',
      'amount_to_clear': 1.08,
      'ndf': 0,
      'type': 'Processing Fee',
      'deposit_date': '2016-09-30T04:00:00.000Z'
    }, {
      'uniq_id': 'gc_1300498',
      'id': 1300498,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-01T03:00:00.000Z',
      'amount_to_clear': 0.3,
      'ndf': 0,
      'type': 'Processing Fee',
      'deposit_date': '2016-09-30T04:00:00.000Z'
    }, {
      'uniq_id': 'gc_1446881',
      'id': 1446881,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-04T03:00:00.000Z',
      'amount_to_clear': 1.65,
      'ndf': 0,
      'type': 'Processing Fee',
      'deposit_date': '2016-10-03T04:00:00.000Z'
    }, {
      'uniq_id': 'gc_1446883',
      'id': 1446883,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-04T03:00:00.000Z',
      'amount_to_clear': 5.89,
      'ndf': 0,
      'type': 'Processing Fee',
      'deposit_date': '2016-10-03T04:00:00.000Z'
    }, {
      'uniq_id': 'gc_77889935',
      'id': 77889935,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-07T03:00:00.000Z',
      'amount_to_clear': 1.95,
      'ndf': 0,
      'type': 'Processing Fee',
      'deposit_date': '2016-10-06T04:00:00.000Z'
    }, {
      'uniq_id': 'gc_77889937',
      'id': 77889937,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-07T03:00:00.000Z',
      'amount_to_clear': 7.48,
      'ndf': 0,
      'type': 'Processing Fee',
      'deposit_date': '2016-10-06T04:00:00.000Z'
    }, {
      'uniq_id': 'gc_77943594',
      'id': 77943594,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-08T03:00:00.000Z',
      'amount_to_clear': 0.6,
      'ndf': 0,
      'type': 'Processing Fee',
      'deposit_date': '2016-10-07T04:00:00.000Z'
    }, {
      'uniq_id': 'gc_77943596',
      'id': 77943596,
      'account': 'XXXXXXXX7645',
      'clearing_method': 'ACH',
      'effective_date': '2016-10-08T03:00:00.000Z',
      'amount_to_clear': 4.21,
      'ndf': 0,
      'type': 'Processing Fee',
      'deposit_date': '2016-10-07T04:00:00.000Z'
    }]
  },
  itemSave: {
    item: {
      id: 1,
      name: 'Luggage',
      is_active: 1,
      is_favorite: 0,
      is_one_time_use: 0,
      is_taxable: false,
      prices: null,
      categories: [123],
      details: {
        prices: []
      }
    }
    ,
    modifierSets: [],
    existingPrices: [],
    selectedCategory: 123,
    existingCategories: [123]
  },
  categorySave: {
    name: 'Special',
    color: 'FFFFFF'
  },
  discountSave: {
    name: 'My Percent Discount',
    color: 'ff0000',
    type: 'percent',
    percentage: 25.00
  },
  userExperience: {
    openAccountSwitchDialog: false,
    enableLink: true,
    requestNewToken: false,
    notifications: [],
    selectedItemTab: 'details',
    selectedDate: {
      dateRange: {
        text: 'someText'
      }
    },
    modalVisibility: {
      paymentDialogOpen: false,
      vtDialogOpen: false,
      operationType: '',
      showError: false,
      showConfirmation: false,
      showRefundTransaction: false,
      refundAsVoid: false,
      errorMessage: null,
      payment: {
        entity: {
          id: 1
        }
      },
      receipt: {
        line_items: []
      },
      formValues: {
        emailOrMobile: []
      }
    }
  },
  modifierSave: {
    modifierSet: {
      id: 123,
      name: 'Option Set',
      can_select_multiple: true,
      modifiers: [
        {
          option: 1,
          name: 'mod',
          price: 19.99
        },
        {
          option: 2,
          name: 'mod3',
          price: 10.99
        },
        {
          name: 'Chewey',
          price: 10.99
        },
        {
          name: 'SomeRandomNameThatShouldNotExistAndNoOptionAttribute',
          price: 12.99
        },
        null
      ],
    },
    existingModifiers: [
      {
        name: 'mod',
        price: '9.99'
      },
      {
        name: 'sale',
        price: '0.99'
      }
    ],
    newModifiers: [
      {
        name: 'fake',
        option: 1,
        price: 19.99
      },
      {
        name: 'fake2',
        price: 29.99
      }
    ],
    isNewItem: true
  },
  validationHistory: {
    data: [{
      corporate_name: 'Billy Bob Thorton Roundup',
      federal_tax_id: 'XXXXX1234',
      tin_type: 'SSN',
      business_type: 'LIMITED LIABILITY COMPANY',
      response: true
    }]
  },
  signatureImageId: 21404,
  signatureImage: {
    data: [{
      'entity_name': 'credit_card_sale',
      'image_id': 21404,
      'entity_id': 44044,
      'image_data': 'iVBORw0KGgoAAAANSUhEUgAABlYAAAI9CAQAAADiRo2PAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfgCwgNMCcaYLgXAABzx0lEQVR42uzdebzl93w/8Oe528zc2dfMln2RTUIQCRKCENRapaWL7tVqVRfVoqgqyq9aXZXqokWpfSdBEIIkiET2ffZ9n7lzl+/vj3sykpiZ3Jm5936+55zXM4+I3Ln3e17fk3PP+b6/n+VNRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERES0pO7SASIiOsQ8/faUDhEREdFKGqUDRES0uYajPc4LnKzhDh9wmTWq0qEiIiIiIqLTTfU81xlW7fvrchdnVDsiIiIixlPDNIud4GQnO9mxFugrHSlqrmGJ99nSLFL22qtSGbHKs/WUDhcREVF/mQYWMRY9zvZkpznJUc0SZZvVbvEF37W6dLiorfO82RPAkM+7zIine5IerPCrvpTJYBERERFxJPqc6Q2+Z4PB+0zkufevbVb4oBc6KoV/PECfp7jLiMqI73qhmRoa5nqZdSqVGywpHTEiIiIiWtlZ/sEt+ylS7v/XXl/2m+aXDhu18gIrVSpDPuqE+3y928ubhe+rS0eMiIiIiNbUcIJ/ssFIsyDZ4Tof8ArPcKELXejnvM2XrTTU/PMBN3m5RRlhCfR5gY3N182fmPOAP53h3YZVbnZW6aARERER0Yp+xrf2jZxs9C4/7aSf2MFplgv8vmv27fS0x+c8vnTwqIGfbo6qbPTH+11I/zibVPZ6eYrbiIiIiDg0p3t3c9+mYbd4u+MOsnNTwxRP9mmb961i+Q+n6ip9ClFMt8e7u1mqvPAAr4SG/1GpXGdG6bgRERER0Uoesm+sZND7PEzvGH5mtuf45r4Rlu94Vu6Yd6yTXGVEZYc/PkjR+szmupXzSseNiIiIiFbR7Zesao6p/MBPHVLrvj6/4tp9a1jeYlnpk4kC5vuiSmWXPzxoJ5UlLlepvDOjcBERERExFlP9anNb2SH/5vRD/vluD/GfdjcX3F/ujIyvdJg+r7VHZdA/6z/od3b7a8Mq37a0dOiIiIiIqL9+f92cmrPBaw/7KD2e5/rm6MoKv1T6pGJSvbi51ukzFj7o9z7dDpUNnlQ6dERERETU3QyvsVNlxGY/Z9oRHeuRPte8aF3vpaaWPrWYJGe4TqWy0jlj+O4Z7lIZ8QelY0dEREREvfV7c3NU5VpPGYfJW31eb0Ozz8afH3TtQrSL6d5vWGWT543xFfTfKpVPZ7JgRERERBzYTK+zQ2XErR49TpeO07zIZiMq27z+J9oCRrtp+AW7VYb9rSlj/JnfMqKyfczfHxEREREdp99fNkdVfuC8cb3LfbGbm1sgvymjK23utOZKpe86esw/8yjrVao0Eo2IiIiI/ev12zarjLhxnEsVul1gpRGVLf7wQXaHilY21b8YVNnoOYewFfHRvqVSeU3p+BER0XGm6SsdISLG4lk2qVTu8vgJWDvQ8BS3NteuvKL0qcaEeWpzQ4X3HNIIWl9z1cr/jqnxaERExJHpc4qLvdgfep33+n+Wlw4UEQfX8Mjm/k1rPHuCJmp1u9DdRlTWesEhNZmMVrHIl5vTCB9yiD/5x4ZUvpFeK7XR4wQnZRVRBOhxrJNy973l9ZvvRI/wi/7BVe62wY7m5Pdhf1E6XEQc3GJfV6ls91sTuKakyzOtVqnc7PzSpxzjrssr7FbZ5dcPeWzuEgMqd3pE6ZOIpie63T1eeAiT+SLa10Wut8JPl44Rh2mJ8/2SP/cfPufOZnly/7+GvbF0yIg4mPn+y4jKXm+d4DupPX7OdpXKd5xa+rRjnC2zUqVy2WF051lqp8pOl5Q+iWj6U5XK58wsHSSiuG5/ZUTlU6WDxBhMMddyD/FwF3upv/dxN1lpo12GH1Cg7HaXG1ztCv/tDy0oHXwsskNRdKpuv+/5GkZ8ylsNTOhjDfmoM73CNOd4s5fYWvrkY9x0e7ml2Ortdh/yT6+yUb9+x5c+jWi6DVxghu2lo0QUNmKDBk4oHSR+QsNi0013lH5LTLXcPPMtstB8sw/4U/e40VVudIMNNtpW+iTGLsVKdKaGZ/pjU3CFl9s04Y834M3m+k3dnul1Xmtn6ScgxsmFXowR/+Wrh/XzNzgap5c+jWi62mpLTHeG1aWjRBRWWWfAFLMssKF0mEnRpx9Tm6PkPWZooMss0HDCvlkY8y3a91Pdlv7EWOw8iw/hcTdbo3rA13a5Eyx7QPFx77/36NLQc5+/f9Ju22y22T1+5Id+aIO9BgyVfpoPXYqV6Eyne6MpuMOrrZiUR9zhTc5woW6/7FrvM1z6KYhx8euWYpN/OIxxFbjZU3BG6dOIpp1WWIJjSgeJqIGtdpui26w2K1Z6Lderz9F6zLBUw0xLMc1szGgWJ33m6kKPBROwV+h9LTrkzVkOZq/Vvmel26yyzmqrWmkMZf9SrEQnmuUfnYEdXukbk/aoK/229zvLHG92k2+VfhJiHFzkBRjyDjcf5hFuBCeWPpFoGrQF7nPXNKJzbbHLHFMsdXvpKGPWMN00M/SZoc80/aY4QcMJplpkvlmW6tKlgW40dO3731ay3V577TBsm2FbbHSXO91jrdsMGzJi+CdGa1pWipXoPN1+p9kz/H0+Nqm/zNf7S+8xy2J/7petKf1ExBGa6dd140b/d9jHuAscZWbWSNTCgHXg6NJBImpgl73oqvlm3v2Wm2WZBZY4yjwzTTfbFLNMMd2McXyk2/etb91k7b6vjlj1gPfvylqbD+G4i8zfz1kdC1Y9YJXr6L9XthowYJshmw3b2IqTu8YuxUp0np/3J6h80hsmfTLWJxznL0x1sTf5LYOln4o4Ik/0dAz7t8MeV2GDNRbrcrJrSp9OYNgeaE4Diehs2+1Bbw1GGqeZYabp5phqtsUWWmq+5WZbbio0J2qNbbrWiC2GDdlq2LDNKoO2GrHVKmyz2jB2uad5jXCTEbjfzc2D3+g81NugY59m1jajJYcixUp0msVeZzY2e8197oxMlr3e7SKX6PZzPumTnfm20yYaftVsrPO+IzjKdlss1rA8xUotDFgPlpUOElEDO+xG97iOThzMjydkdZnuGAsscqKpTjPVDDNMN9tUMx9kytboBr32bdXLDSorbLfZatus2lembDWyr1jZ3ixIysi1wEGlWInOMt8/Og6bvcx1RRJs8QrLnGWat7knF6gt7MkuwZC323gER9lqM7qcVPp0Aow0xzvz2RjBHkMmtlhZrMd8s/Sbb5Zl5ltiqXmWHULfqiFb7LHFTlvtttV66622zTqb7LAyhUDryxtydJKGn3OJhsr7fbJYilu92bvNcJLX+Rl7Sz8pcVgW+h09uNpHj+g4221Bw8LSJxRNmw3qNd38IypCI9rBFjvRe4TvT126dWvo1q3HEgsd4yiLLTXbPD1m6TfVrINekVaGjRgxpDJsszVW22ClLVbaZoe9tttjpwE7U5y0nxQr0UnO8Qb9+J5XFex0MuyDzvVyXZ7lN/1zey+La1sXu0QDf9/cC/9wbbUeDUfrySuhFjYZ1GuaOSlWouONHOaF/3SzzTXNUn0WWmiBZWZbut+F5AcyaJOdNtlkt3V2uMcW69xthxVZ79lpUqxE51jmL8zFaq+zo3CWv3OOx+PlrvbN0k9MHLI+LzMFN/rYER/rbjDXjOamuVHWagP6TTe/2c0+opPdu1/htP10kurVrVePbr2mW26JRZZa5BjTTdWvz2w9DzKFbNCIvYYNGTLgbputsMo6q2yx01477bK38HqSKC7FSnSKHq/wdPA3Plc6jLv8mU+b60RvdslhthOMcn7aw7Hb39h1xMdapdIwJ8VKTaywB3Ms953SUSKKG32Hm9Jc+j7PTPPNstA80x1tpmUWmm1Zc0eusdhqs422WW+7re6xxx3NdSYt37owJkqKlegMXZ7mJRhxqXfVonv8lf7eq/R5jN/wj5kA1FIW+UVTcc24lL0rwSz9pU8rwG12YIbFGpn7Hh2nYYoefXr06jPFYnCud5lnoan6TNOn31S9BznKiAFDBg0YsdsWq91pq7uss8ZuA3bba5e9+7qWRBxUipXoDMd5nfm4xatq0nxvxD871yV6/IGrXFE6ThyCp7sI/KMV43C0u1QaFphT+rQCDLjbybqcpScz46MD9Fim30JzzHaUmZaaYZG55jhq3y2Uk538IEcZttZmm2yyyXpbrbXFZisMNCeSRRyBFCvRCfq83MMx4E2uLR1mn7Ve63yzHe31nlt8FU2M1TQvNQWXj9OOchvAHNNLn1g0Xe1JOEVvipVoE336TNFrql5TzLbcIgstN9vxppqm21S9ek3VfdDj7LXXgL32GLDXSlvcZJM1Vtlsj73NPx/ICpMYXylWov01PM0v6jLioz5UiylgoypXeadX6fV4v+YfMhWsRTzbmdjuX8ZhvQr3TgObqq/0iUXT98DZB53mElFnR5luntnmm2WOeWabY75ZFphp4YMUJPe3wwxs9nlrbLTJVhtstc7mrLGLyZNiJdrf47zDbFzvLbWbIfvPzvEMvV7hSleWDhNjMMcL9ONql47bioZ7HIuTfaH0yQW42U7TzXOSq0tHidiPhn7d+nWbrts0vY4x3XH6LTXHcrP27dN1718HU9lpyE577LXLkJvsdrutVlhro3N9ENu90a0ZaYxSUqxEu+vxe44Hb6/RFLB7rfYGTzDdMV7phfkoaAFneTL43+b0rfGwybGYW/rUommT2z0UZ6VYiVrosdgMi/VbbIYlppuvz0JTLNJn/iH0eh+121qbrbXRJmtst95ua2213fqfuKF3XPOfA/l8inJSrER76/Kc5mJoNe0Vf42/80f6PNUv+7caTVKL/enxm2biNh8ex6Pe4eFYXvrkommzWzwUj/PvpaNEB+gyXY9+vabrNc1U0xynxyl6HGe64/Tq0XWfvxsPesw99hho7ru1x25brLXaeitttMJuQ0YMGTZsKOtLov5SrER7m+dV+zrm/rpLx/Fu+HgZ9i5P8mj9fs/lbiodJw7qLE/EiP8a1/nao8daWPrkommHW4zocopZ6fwQ4262o/Rbrs9x+iw31VxTzDHVHNPMepAmivu3wSbrbLHGNhtstN0OO2210zbbj2gHzNVgnimln7boZClWop31eaVzMKhHw2P9nH+s4V2ku/2pT5nudH/uV2q3qiZ+bKpftAi3+Mi4joGNboC8qPTpRdOw79uj3xIn+H7pMNFipptimn59Zuo221RH67fcDMuabRQbujR07/vngxuxw1477LXdoB32uttOd9plpa1W2GZEZVhlRGVkXD/lNoMZuVqMkvLyi3Z2rhdr4FJLnW2KX/N+G0uH2o8rvN+v6vIMT/Gp0mHigBZ5li58zQ3jetz1YFnp04t9rrdHv8WOT7ESB9VrmVmWmW6Z6ZabYZZppptpijl69o3rH5rd7jLoVsNW2maFHbYasNUeW+y1Jbe0otOkWIn2tcBbLMXtXulY7zfLWV7qL0vH2o+9/to5HmG2N7ne7aXjxAH8quOx2TvGeXxuHZitO2uWauI668wz3dk+UcOx2JgsDTNNMdNU/aabaqa5FpvhGFOcqM+xetHQYN/fD26P7fbaatgmI7YZsMp2q2yxwTpbrUT1gL9LGtYtV4tRVF5+0a4aXug8VN7jOvf4kp/GT/m35hzcernV3/hvDaf7Na8u/uEU+7PQc8AX3D3OR95mu5m6LWlOCIvSKt9yKh6tK8VKGxstMH5cavQ4Wa/jTLPcDEvNbhYrU0zXb6qZYzjmaHnx40Jj0Ao7rbTDCtuss8Ee2w3aashmI7bVfJetIWssw/Jm/6GIAlKsRLt6tD/SrfJp78JW7/Rksz3cz/j7WhYDH/c/XqTbb/iGz9UyYWfr8rNOwQbvtXOcjz1gwEwN/aVPMvb5hl/Go/SlWWtbaJivW685zXUk08zSa5mplpptgQWm7duk91AMNydojU7S2m5Xc0vgdbZbaa+7a16KPLjKHsi7U5SUYiXa01S/5xhs9LfNBYLf8g3P0Oc3/WvzzbdednmHxzjBPC/1rWbmqI/Znmsqfuib437s3fag2wI3lz7NaPqRrWab71TXlI5SVI8+PeZarOFY0x/wp5ub49Qj1tja/NqPi7v7L/SuHmSMavggt2i6dN3v3xv7/v3eBeqji9XpdaxeXZaahaXmYLlZRqdZ9pihywxT9I1xz62RfUvWR//a5S6DbjHoTrutsMMOg82/B+y2e7L/A0V0ghQr0Z6e4+eMbgv85eZXBv2TJ5judE/ymdLx9usa7/C3uv2Ul3hH6TDxAI9zEYb9v3EfV2G7HWikLWSNrHKTc/Hkji1WpjreI53r0c46pG1rb9u38mrl/X5Xdll90DVZdx1k2ficB+yVN8fC5vqQPkv1oceycdhcd8QGgzbZbbM9ttptnS022Wib1bZZM67PcESMUYqVaEfH+W1w1f2aul3j256IX/LVCbjgHA//63meoOHXfMl1pcPEffT4JXCV707A0UfvQHdlokWNbHS7c3Guvpq2k51IDY/1aic4+pB7o3Pivv93SunTuJ8hIyqDzf832hJxle02WG+rlXa5U2W7YTsN2mnQrpafwjUehqxzIpaUDhKdLMVKtJ+G3/QY7PLXbrvP19f4iAv0eoyzJ2Aqz3hY700eaoFT/bHfyoSCGnm08zDg/c1thsfXRhvRnR72NbLTVZ6vx7GWuKt0mEk3x5tceL9nY4tB635iItec5mSqLvNr0zRwrUGVTXZju63YapvKWjvtscaQtXbYk80sxmik2Rg1475RUIqVaD8P8VLdKp/z2Qf8ySe93kJL/FRNixW+5v1+V5fn+2+XZpl9TfR4usVY7fMT8t9kpHnUsbSHi8lypb16HOO4DixWBm1W2WuLu1zmW1bYY8TOn3j1T9UHGqY1X719Tti3nuTo++2eNcfiB6w8ua9exzSPtT+bHzABa4cVzcJpwAoDGHJ3cy3iTiMqewxirwGjG1hERETUxmzvU6mscO5+/vQ9KpW79ZaOeUAn+KFK5YrcZ6+NhW5XqfzjBB2/z6dURvxd6RON++i3UqVqTintNA/xei91Zo3fKWNyzPB5lcobSgeJiGgfL7RZZcgb93uf7mJbVEZcUjrmAXX5VTtVBrw2d9pr4pcMq2zbb/k7Pj6iUvmXMTaVi8nxcZXKh0rHiChouk+pVN5cOkhERLvo9wOVyk3m7/fPF/uKSuU9Nb5jONVnVCobPLR0lMAcl6pUPm7OhD3GPzQvi8e2nWpMjt9XqawtHSOioCn+RaXy/tJBopN1HfkhImqjx+85E9u9ycb9fsdalxrB4zykdNgD2uP1VmG+Pze7dJjwGGdjpw/v6yQx/kaP3JextFr5nq1Y4FGlg0QUUzU759T39l50gBQr0U5O8CJd+JJPHeA7Kh8yhBOcXzrsQfzAew3hKZ5ZOkrH6/FMC7BqghbXj9oBpuSCoFZWuB2N++2LFREREXHY3m5YZadHH+R7Gr6gUrmsdNiDWuT7KpUbDjCdLSbLEutVKn8xoY/yCyqVbzum9Om2jN5J6ErT5z9UKh9NB5zoWH3NSaofLh0kOllGVqJ9nOAXdeHjvn2Q76p8yDAe6ejSgQ9inb8xgFP9WqYGFfUCC7DGxyb0UUa3Ye3KAvsxWu6v/KOzJvhR9vqOEZySIjI6VtVsitp3hMeJiAjT/YthlTud9yDf+VA3qQx5WenIBzXLfxlRub3WE9ba3SJfUxnxvgle+v48lcq19+n+HQfW7f2GjfjXCX+kUwyo7PT00qccUcwrmu9OEcVkZCXaxZmeowuf9v0H+c5b/RDdHn+/lmV1s83f2Ybj/X7pKB3sPGdhwGeaq0omyj1gvumlT7glPNozdWk0O2tPpJutRP+D3gCJaF+ja/VytRgRcYT6/G9zu99FY/juF6tU7vGw0rEfxJsMqgx6dukgHarhoyqVH5g6wY/0cJXKygmf2NQOpvugSuU7kzIO9Y8qlatKn3REMaNbeF9XOkZ0stTK0R4e52IM+zcbxvDdnzeApR5XOvaDeJ/r0eNllpSO0pEWeSr4kD0T/EgDYFp2AxuDJU4DH3XHJDza1w3hFEtLn3ZERES0rjnNXtNXOX5M39/wMZXKFaWDP6gXGFYZ9NrSQTpQl9epVG5z5oQ/1hSVSuWC0ifdAp5gt0rl2El5tIe5TWWvny992hGFZGQlisvISrSDU5udED7srjF9f+Uzzfuly0tHfxAf9xX0+E3HlY7ScY5yESpXuL10lLiPE03FWism5dHucht6nK+n9IlHFLHTIHomeJORiINIsRKtr9vvmYvbvKe5BeyDu8qdmOni0uEfxF5/ZS2W+vMsvp5kj/EoDPofuybh0UYX8Nd5y4e6eBi4dgJbdN7XZt9BwzmZihkdarPdmJKeX1FOipVofed6Iob8uy1j/pk73Y0+59T+fuk3/Q8anpUdiSZVwwv143aXT8KjVVaDZaVPuwWcAq6bpGKFS5uPWue+TBERbSzFSrS66X7dItzh44bH/FNbfAMNj7S49Ak8iD3eahXme82E70kVP3asSzDiPRO+uH7UvW0h48GMLq+/Y9KKlSttwjyPKX3iERGdKR+N0epO9SwNfMSNh/RzXwJntMAuP+u93QAe7YX5jZ0kXX7WdNw9KeMqpFgZq6NNxx4rJ+0RB5rvFU/RKH3yERGdKB+N0ep+0Xys9q5DGFeBa6zFTI8tfQIPqvJBV2Ka3800oUmy1DN14fJJ2gNnxFqo/ThfeUfrwUZrJu0RK583hEc6pvTJR0R0ohQr0drO8iwM+89DvtM66CtQ+yX2sNrb7MXD/Eru7k6KR3oYRrxvkiaBsRXMKX3itXecXmyxcRIf83orMC0bS0dElJBiJVpZj+dajpU+bPAQf3bIVw3hLHNLn8YYXOoz6ParzRn7MbFepB+3+lrpIPEAJ+nDJusm8TFvcjOmeGyadkZETL4UK9HKFnmuHnzNtYf8s5XbbEL/JLT8O3ID/s7dWObl+kuHaXsnehKGvfeQS+CYWL2W68b65kjU5NjmcjQ8ItsXR0RMvhQr0coe72wMeY+hw/jpO63HtOZWqHX3DR81uvD7kaWjtL1nm4W7mgurJ0PVHCk4qvSp19zs5gbCN465o9L4+CI40wmln4CIiM6TYiVaV79fA5f5wWH9/D3WYIrTdJc+lTEY9v/chllel9aBE2qpZ+vB110/aY9Z2QRpu/YgpjfLuUPb+e/I3eA2TPOE0k9AxKTbYgA9+dyJclKsROu6wFnY7eO2HdbPD7gJDQ8xq/SpjMlq/2wPzvW8LLOfQKd5BHi/gdJR4gHuHVm5Y5Ifd8Bl4Mmln4CISbfDXkwxr3SQ6FwpVqJVTfWz5uN2nzzsKSHfASeZXfpkxmTYf/oOZnhFtjCeQL9mOm7J4voammc+BidpQ+kfG/IVu/GQZiEbERGTJsVKtKr5fkoDn7bqsI9xFTjOjNInM0Yb/I1BnO05paO0reM9HnzA3kl81Mp2yESLB3GSBlYV2Pjgh+7BTI8u/RRERHSaFCvRql5sAdb79yM4xmqrMNW5pU9mzL7s4yq8zEmlo7SlLs9pjtd9YlKXcFfNPkHLSz8BNfcwcMNhbahxZG72I0xxUYtMGo2IaBspVqI1zfR0cOkhN4O8r71ugZbYvHjUDu+zGSf4eT2lw7ShuZ6iD9f5UekosR+jPeTvMDzpjzzoc+D87NgWETG5UqxEa3qis7DdR+w4gqPsaU4EO7306YxZ5VM+jV6/5bjSYdrQGc1JYO+dtM71MXZ9zgI/KlCs8Bm7scw5pZ+GiIjOkmIlWlGPJ5mDVS49ouMMN9e7LG+p3bXeZRuO8tL8/o67Z5mG211ROkjsx2J92GG1qsCjb/VN8OyWereIiGh5udiJVjTXizXw4SPsY11ZaxdmOrb0KR2Cq73LMF7o/NJR2sxiP4PKR2yZ9MceNIwuU0o/CTV2oqnYak2RR9/lM4Zwfvbii4iYTClWohU9zTxs9KkjPtIaOzDF4tKndAgGvN86LPESfaXDtJUnmIf1vlBgAfcWO9DTUq/EyXZss1hZW+TRR/zARsz1yNJPREREJ0mxEq1nhheDL7vhiI+1xnZMs6T0SR2S7/sPdPmlzJ8fRzM8ywz80JUFHn3YMBrZNuEglpuCLVYXevzvuAWzPTXjXxERkyfFSrSehzsDe3z+iBbXj9poF6a23Jax/+Um9Ppd00tHaRtLXQQ+YWfpKLEf/U7UhTuL/ffZ4XLwKHNKPxkREZ0jxUq0moaLLMN6nx2HZbZrbEafJS32u3Crf7MXz2hu4RxH7ukWY4PPlg4S+9XfvKVwa8EMnzWEs51S+smIiOgcrXWBFkGvnwaXjdMy29vBElNLn9ghGfJet2G238qUlHExxXPApcUmGcXBTXc0uL5ghpv9ED2eVfrJiIjoHClWotWc5Szs9ZFxOt5osbK8xYoVNvonw3iiC0tHaQvnOw07fdqu0lFiv6Y3R1ZuKZhhm6+Dx2X6ZUTEZEmxEq2l28+Cq/1gnI54EzjWtNKndsg+3Wxp+atmlI7S8no80QLc1bwYnXyju4H1NXu0x09aajp2NHsjlbHX5bbiBI8u/XRERHSKFCvRWo72BFS+PW6TdbaD3hb8Xbjb+w3iIueVjtLyZnuaLnzT3YUS7DGIht7ST0VtnQ5utqdoim9Zi/keo7v0ExIR0Rla7wItOtvZTsUeHxi3Thijk0pabxoYI/7TnVjoZflNPkIP9XDs9cHSQeKAzgD3GCyaYo3L0O0ZZpV+QiIiOkMucaK1XGI6bnPNuB1x9NKnpyWXqW/1PjRckn4rR+iFunGtH5YOEgd0ErjJ3qIpqmYr2oe33HbnEREtKsVKtJKpzR2b/m8cO4wPuAucUPrkDsuH/RBT/IGZpaO0sGNcgGFfsKl0lDiAWZZh2N3j+Lt/eK71A0zxgtJPSUREZ0ixEq3kcRZiU7M12/ioDEMLTgODW31MhSc7s3SUFvYoR2Ozy4pfCMeBLGsury+/sfQGV4LHZ2OLiIjJkGIlWkePn9aF7/vROB51wJ3gxNKnd1iG/K21WOg3S0dpWVM9yyzc5pulo8QBHaMf24ptgPBjAz5rK051fukoERGdIMVKtI5FztBQuc6GcTzqiAG06sgKm70XPDNdtQ9Tv4vB55uvhKijZaZhl42lg+BKWzDPI/IJGhEx8fJWG61jdMemEf9jZByPutc9aNWRFfhvP8Jcf9SyBVdZT7cEG3ygaIoRI2joK/101FKXE03DBneUjoJ1Po1uL9BfOkrEhOvXgyE7SweJzpViJVrHBWZgte+P61HvHVlp3Y1Ib3MZGi7O2Mph6PN0cNW4jtcdutGmkD0Wl35CammKo6B5Y6G8z6twRlp4RgeYZxoGCr9DRkdLsRKtosdPg/eP89ale60Ey0qf4BGcwdttxXF+rnSUFnSm87DX5wtPMNprSJpCHsh0p4LrSgdp+oHvoc+LSgeJiGh/KVaiVZzsaOz2rXE/ctX8Z6P0KR62FT6jws+YVzpKi2l4lGXY5Aulo8RBTGmOON1UOkjTOt9V4bHmlI4SEdHuUqxEq3iKKbjVDeN+5A32YJoFpU/xsI14t3VY7mdbuOQqoddP6cM1biwdJQ5iRnPCVV2KlQGfsRNneETpKBER7S7FSrSG6c7Vg5snYIHtHkPobunl6Vf7DqZ4joWlo7SU+S7CiI+UDhIHdYJebLC5dJB9rrAJ8z0hn6IRERMrb7PRGpY6G3xhnFestIvtzQ2ML/CY0lFayk+bjpXNNn9RVyeBe2q0ufQmn0WXn80qo4iIiZViJVrDKU7BsEsn4NiDRtDV4hcdX/Z9TPVLekpHaRkz/RT4Zm12mYr9G93n7na7Swe5j0/ZhRM8snSQiIj2lmIlWsOFevGjCbmoXG0XpltS+iSPyA7/aS8e55zSUVrGmU7HgEttLx0lDmq0C9LdNRpZ4VrXGh1b6S4dJSKinaVYiVbQ5UJw2bi2g2wvIz7rVszzCy29+mYyPcYybPap0kHioGZbjhGrDZaOch+rXW4Ej3Vs6SgREe0sxUq0goVOxKCrU6wcxM0+jy4/1eJjRJOly3N14WvWlo4SB7XEdOx0d+kg9zPso3bhlEwEi4iYSClWohU80jSscWvpIDX3LjtwrBeUDtISjvVoDGUnsNo7ynTsarZvrY+r3Yrpnlc6SEREO0uxEq1gtFhZ7a7SQWruHp9Cw4vSHHIMnqUHt7q2dJB4EMvMwO7ajYAN+zB4mhmlo0REtK8UK1F/M52uGzdbUzpKze32fhtxomekOeSDmONpqFzpztJR4qAalutXv2lg8CWrMCtjK9HGuvJpEqWlWIn6m+9UcJWqdJTa+5ofYbqLTSsdpeZOcTqGXGpP6ShxUD2WaGBFrfYCG3WrH4Cn5/ct2tZc0zBgY+kg0blSrET9zW1uXPqV0kFawDbvA89uPmdxIBdajq0+UzpIPIgpzddyHVesbfYJw3i000pHiZgg0/RgyI7SQaJzpViJ+jvOdOzIdJ0xucxKzPK00kFq7mc08FVbSgeJB9HnGHBb6SD79WlDWO4xpYNERLSrFCtRfyeBmw2VDtISVvm0Cr9oUekoNXayh2GvD5UOEg+q19HgptJB9mulL6DHz6c1ZETExEixEvV3BrhpwoqVfr0YaJN77Ht8wTYc7Qmlo9TYM/TgNteXDhIPaoZ5qNxTOsgBfNQQznR66SAREe0pxUrU3+hs8NsMT9DxF5iCvbaVPtFx8nk/wizP1186Sk3N9VRd+E4t10HE/Y3+/t9R29/Pb7oe07w4YysRERMhxUrU3UxHYchdE1astJvdPgGekk72B3CSh6LyWXtLR4kHdSxYW9td2+7wbXR5ouWlo0REtKMUK1F3J5iGzTXssVBfH7YSs72odJCausAybPPZ0kFiDB4CVtpdOsgBDPlncJZzS0eJiGhHKVai7o7Sh50TuMf7FN2o2mjkZrXPqXCJBaWj1FBXs4Xf57MVZwtoOAWssKt0lAP6oWsxxc+leV5ExPhLsRJ1d4yp2G7dhD3CItOw06rSpzpudvuEbTjTRaWj1NApzsaAT5YOEmMw2zwMW1vj3QCH/YchXOT40lEixlmXGVDbkc3oCClWou76dWHAztJBWsqX3YaZnqGvdJSaaXimqbjVNaWjxBjMMwMDVpcOclCXuxvTPTefqdFmepqb4K8oHSQ6Wd5Yo+4W6cMOmybo+A09YLD0iY6rXT6AhueaXzpKzcxxoR58v6ZNBuP+lpiF3e4oHeSgrnMFej3DwtJRIsbZ6HVifUc2owOkWIl6m9L88N8wYY/QZym4q/SpjrMvWo1ZLi4dpGZO9CjwkTYrT9vVQjMxYGXpIAe11weN4NzmRssRETFuUqxEvfU0e4Wsn7BHaM+RFe70TfAC00pHqZXHOApbfKV0kBiTRc1pYGtLB3kQX3cHpmcHvoiI8ZZiJeqt3zKYwO7VvRZD7S+GDtV2XzaAhzq7dJQa6fFC8CnbS0eJMeh2jC6srv3Obbt8yAie2hypjYiIcZJiJert3nGPibu07GqO3Uzc1shlVD5pG5Y6Pxuq7vMQp2LApW20UXU763EcuKV0kAc17PPWYqGnlo4SEdFeUqxEvXVN+CSt3mYvkolawF/OSl9Bjxc1n8Po8kwzcaerS0eJMeluoRVl1/g+pnmeeaWjRES0kxQrUW/3LrCfuG0Tu80Ca0qf6rirfNIQHpbuD00zPFIvbnJr6SgxJt3N124rFCs7/B94jGNKR4kYNw29YG/pINHJUqxEvXU1+4TsmbBH6G2WQ+02DQyudD16vDi/6eBo54GPGigdJcZkimPBdaWDjMknrcE8P186SMS46XU0uL10kOhkuYSJTtdtJtpvgT2scJUKT0z3B/Aoy7DDpaWDxBgt08Amu0oHGZNtPgae3pxaGtEORq8TR0rHiE6WYiU63QlgfVsOcg/4iAGc4WGlo9RAt58DX5jArj0xvh4CVttZOsiY7PVBq3G8n8lna0TEeMkbarSGasKOPAfsaNP+vF+1DnPTGhInOBN7XdaWhWl7Gp2AssHu0kHG6GrXY6pLmuO1ERFxxFKsRL1NbU6oWDdhjzA6snJXy1wOHZrdPgp+3tTSUQpreKr5WOGbE1j6xvgaHVlZVfsuK/fa6T/Ak51ZOkpERLtIsRL1NtxcCj1xm+8eBba36cgKn7MVCz2qdJDC+j3aFNzuxtJR9qtXD6os/b+PRrMl7PoWupXwVTei34vS3SgiYnykWIl6G2y2g5w/YY8wejm0tm2nBn3fNejy88191TrVQheAT9W0HJhvFgYncJPu1jPfPAy6p4VaeK71USO4xImlo0SMg4Yp0La386IlpFiJztawHKyt6SXskdvgShXOb/YC71SPdjR2+lzpIDFm88zEkNWlgxyCIZ+zFstcnLGVaAM9FoO7SweJTpZiJTrbbDMxbEvbbsw44j8M4SHOKh2lqJ/Wha+3YfPP9rXQbOxtsdGmK30bU7y4uXlHRCu7tynkxPU6i3hQKVaisy3Qjz1tfQl7q2vQ52dLBynoROdg0BdbZBPcgDlmar2pcUP+yzDO7fDbAxER4yTFSnS2RWZgt3tKB5lAI81WdU9qbibQiR7tKKz37bYdQWtHC5ojK602AeVbfoBev6K7dJSIiNaXYiU6273FyqrSQSbUV9yF6Z7RobPop3iM6bjbtaWjxJh1NZeorzBYOsoh2uCThvC4jK1ERBy5FCvR2UangQ1MYB+XOvhR807v080qHaWIuZ6igc+0TL+OoOFYtOLC3iH/Zx2OcUnGViIijlSKlai3Pc0y4ugJOXqXo/Riu62lT3RC7fBpcG6zBWanOduJGPCZ0kHiEDQcA+4oHeQw3ODr6PHTHXp7INrHvVsXt+vm/tESUqxEvQ0328HNmJCj9zQ3Lm7Fy6FD83E7cbTzSwcp4um68P0WW6jd6bqaxcrtpYMchhH/ZQ8e4bGlo0QckXs/Je8qHSQ6WYqV6GS9joea9jQfTxt8AfxycxvKTrLQhRjxFZtLRzmIHt0Yyf3LfXqa08BuLh3ksHzXFeClZpaOEjEOWm3lWLSVFCvRyTrnnlHl0wZxslNLR5l0j3I0tvparXswt2IDxIm1VDe22l46yGHZ4JP24pEeVTpKRERrS7ESnWya09Cq924PzeV+hBme22G/9T2eYB5W+kbpKAfVpYGq1gXV5DoObGzRzjiV/3InFnqxntJhIiJaWWddtkTc33Jd2NjWLSHvdbcfotu5HdZXe5rzNHBVi96h71yjK1Y2tWixwhafQMPzzSsdJSKilaVYiU52ClhtV+kgk2DI+8F5zTvWneJkj8Og95UOEododNRzVQvv1Pc+KzDL7+aTNlrW6H52A2mnGyXlLTTqbcB6aK4tGW9ngFUdUaxwte2Y32Fz6C/RwK1uLR0kDtHo73zrjqxwu8tUeLJlpaNEHKbR38MN9pQOEp0sxUrU21CzkJiYbgWjHbLv7pBWgVt8Hvx06SCTaIaLUbmiWfRGq5htIUasbeFdiHZ6j504xzNKR4k4IsOq0hGik6VYiXqrmm+RE9EHut8yjFjVIfeMBn3VEE7voIlgZzoRu3292a8nWsVsszDS4rujfdsP0OcX8lkbEXG48gYa9bbL3bh3dcn4Otp87HFL6ZOcJJVvuwfzPLF0lEnScK5l2OIrpaM8qK68G9/PbLMx1OLT9wb9owE8Js0hIyIOVz4eozU0NMb9mEvNw0CzHOoEN7kbU51raukok6LPk3XhGitLR3lQc83EoFWlg9TEnGaxsqJ0kCP0Td8Hv6G/dJSIiNaUYiXqbpshTJuAVSuLzcFuN5U+xUmzwyfR8ARHlY4yKeY3x5D+rwV2sultdrDPdLVRc5rTwFq9eLvLR4zgIg8tHSXiMMwHu9IBKkpKsRJ1t8kQ+kwf5+N2OdkUrO2opddfMYwTnFw6yKR4nOlY17y3Ha1koWl+vBtgK/sv27C0oza2iPYxemNro4HSQaKTpViJ1tA17kvsu5t9HK5vgbvu4+c216DXM0sHmQR9nge+5a7SUeKQjbaEvLN0jHGw1v+g4Vea96gjWk/2AouiUqxE3a2wBzPG/YO+21ng+tInOKl2+YoKF5lZOsqEO9ppGPLNFm4r2LlOAHeUjjEuPmwN5njJhOxqGBHR5lKsRN3tVaFLzzgft9vx4EelT3BS3XvpvtS5paNMuIc5ETub5Vm0lqOhTTa/+J4r0O0FE9TcNiKiraVYibrbawR9po3zcc8wDRs6borQVe7BbOe1+W9/w0Wm43bfKx1lTEaL8U6aknhwoz3f7ykdY1xs805DeLinlI4ScYja+3MiWkRehlF3Kw2g39xxPu7pYLXtpU9wkq10DXpcZE7pKBOqy9PBV1piF5tG8+K8tVsgjqfRNSvtUazwNd9Cr5dlA+NoMUvBZntLB4lOlmIl6m70XvP491kZ3Uj0LptLn+Ck+xh4hEWlg0yoRzjOvZs111+jOXK4rXSQmjhGL7bbUDrIuPkn2/EQPzsBHaMiJs5o04BtKVaipBQrUXfr7UX/OI8DdDsJnTiywvesxpw276n9DA3c3CarHjrN6IqVbXaVDjJuLnMVpniOeaWjRES0lhQrUXe7jKB3nHuuL7EEe/2gJSYJja9NvgGeO+6bFtTHAhegcmXbTCTqLEdrYL0tpYOMm/X+HlzcbFQaERFjlGIl6m90+HnGuE6fWGwhhqwsfXIF7PQtgzi1uR9aOzrRyRj01Q4sRtvB6K5Zm+0oHWQcfdktmOq3SgeJiGgtKVai/m4DS8e1R8FR5mOgI3ubV75qLRY7r23nz59rObb4QukgcVhO0MCmtlrDs83b7cEjXVI6SsSYLQBbDZYOEp0sxUrU32iXjCnjesyjzcQuq0qfXBE3uBvTXaCvdJQJ8lRwdctc7DaalwStkndidTfXdWy3u3SUcVT5nBsw04s6oCVrtIuFYGsW2EdJKVai/m4Ax47jCouGh4MfdOgb8B6fBk9o04umeR6PER8oHWTM7i1WVpQOUgvzLMSIm0oHGWf3eC8anu8RpaNERLSOFCtRf6ObF4/va/UccH3pUyvmywZwgrNKB5kQTzENq91YOkgclpnmoGrD0u3j7sE0P5/P3oiIscobZtTf7eDkcVyzMq15kX5V6VMr5g5XodtPlQ4yAXo9WTd+6JbSUeKwzDYXlTWlg4y71f7RXjzLo0tHiYhoFSlWov5G5613j+Ni8IfowwZ3lj61Yra4SoXz27Drw3Jno3KFraWjxGHpN1N7jqwM+7x7MM+Lm21AI+psuikYzmq6KCvFStTfHeCEcRxZGb2read1pU+tmL0utQ0nNFfvtJPTnI4Rn2luzRCtZq4FGGmOqbaXH/gYuj3f6aWjRDyo2aZh0MbSQaKzpViJ+htorloZrwX2jeaKlZU2lT61gr5rI+Z7WNu9CzxWP+52Xekgh6QXsj0oNPv/rG7T7S/ebR2O8htt3JQ1ImIctdtlSrSj3c2i4rhxOt4cx6NyU0cPba/1XXS7aJw3hS7v6eBzLXXh3+VEyCobsBjadlvxO/2nYTzTuaWjRES0ghQrUX/D9oCp43S8xZZgyPdKn1hhn1fhsWaUDjKuHupE7HFZ6SBx2I6Btl1Rttf73WF0bGV66TAREfWXYiXqb6A5ArJ4nI63zDEYbrFpQuPvO9ZjTpvtS/QE03BHti1uYSegfYsVvu/f0eWFbbhiLNrLNFMw0lbtWaMFpViJ+ru3WJkzTsc7yQzs7PjL2bWuAc8cx33WSpvufD24sS0XZ3eK0TUrd5aOMYE+4EZM9Qr9paNEHMToAvu9HbwZTdRCipWov0E7wNxxOt5ZGrjaUOkTK2yLqw3jYRaWjjJuljfvVX+5OXUwWs90szBsbekgE+ge/2kAF7mkjW4VRPtpNF+fw6WDRGdLsRL1t8cWcNQ4He+x0PErVhj2DbtwrDNKRxk3pzsZgz5bOsghG90ZaqR0jBo4Rhc22Vw6yAQa8h43YK6XmVk6TEREvaVYifobae7rND67Vs1ozoi/tvRp1cC3bMbC5lhTO7hIN252d+kgh6hhGdp3B6xDcbQubG3zvfo2eBe4oHnzJKKOpurx48/giEJSrET97WzOlz1hXI52pilY7bbSp1UDW30DXZ7RJh0fpjS3Lf5kC05aGN3rrr0v0MfmWN3Y3pz82b4+6Wvo8SeWlI4ScQBzTcdeK0sHic6WYiXqr2pOjhmfV+vDdWG19aVPqxZGN/h9jGmlg4yLsy3ANt9M7/oWtlADW20tHWSCrfZvduFRWbcStTW6ZqXKO2qUlWIlWsEKg5ht/hEfqcdjdOO23CkCV1mJ6Z5cOsg4aHiK6bjD9aWjxGFrOEE31ttYOsoEq3zI1ej3h+O2eUjE+OrKAvuogxQr0QoGVOgeh8lKC5sN535koPRJ1cIaN4CLSgcZBzM9TA9udU/pKHHYpjcv3Fd0wL3cPf7ZbpzhBaWjROzXnOY0sGxdHEWlWIlWsMMIpozDZKXlTkHlG6VPqSbW+YZhPNLS0lGO2BKPAp/q+E2pW1l/s5/S6tJBJsVnfEKF33FK6SgR+zGlucA+TSGjqBQr0QrWGMIMs4/4SMdagBHfLn1KtfFNAzjByaWDHLGTLceIr5YOchhGt+XenT13zGiOrHTG6Ng2/20XTvHirFuJiNi/FCvROhrj8Hp9tB5ca3vpk6mNb9qERc4tHeSIPVcXvtGSExZGV2Nttqt0kOLmWAxuKR1kknzGF9DnFR5SOkrEAzSaNwi3lA4SnS7FSrSCVQYxcxyWoY72NLii9AnVyM7mKNPTSwc5QtOcb3SC397SUeIITDMLrCkdZNK8wwrM9ErTS0eJuJ+u5phvZ0zKjBpLsRKtYLcKPUe8wH6O0zDku6VPqFY+YQTnm1c6yBE5xyJsdWX2rWlpowt6hzro8ujb/tUwnu8ZpaNERNRRipVoBbuMYOoR33k81xRscEfpE6qV661CX0tvX9xwrplY5Uelo8QRGd2trzNWrIwa9G53YKY/aZN+R9EuGnohW5ZEaSlWohWMTgPrN/MIj3OOPtydYuV+7nQ9Gp7cwn3sZzhPH252Z+kocUSWQ0uuOzp8a7zJLjzMy1r4dzDaT7cTIJ+YUVqKlWgNoz0Xuo/oGNOdrRt3d9AUk7HY4rtG8FBLSkc5bPOb2xZ/rkUngU0BQ0ZKByluETqjy8p9fcIX0eUlziwdJeInZJfCKCzFSrSG0eW2y45oe88FTgRXtOgF7UQZ8WXDeEjzLlorOsXx2O3y0kEO0+grc112qXMcuLt0jEm22ZvsxeleXjpKRETdpFiJ1rAF9B/RMRY2L8bTY+WBrrARc5p7pbWip4IfWls6SByh0eakqztsZIVrvMcwnuuidFyJmuhq/j520hqyqKUUK9FK+o7oY/wk87HFD0ufRu3s9VU0mpf8rWeqx4Nv2lk6ShyhBWBV6RiTbsQ/uxWz/GGz605EaQ0zICO+UVqKlWgNoy3ijj2iYuVC8D0DpU+mhr5kCA9v3kdrNQ+zDNt9O3OrW9xxerG9I5vQ3eD/GdHwFC8sHSUiok5SrERrGL0IPbKdch4Hrs6Klf24zhpMdUHpIIflHPOw1lWlg8QRWqAbOzvyTu6w//ED9HpZC291Ee2k0WwXsKN0kOh0KVaiNezBka1ZOd1S7HZVdlzaj1tcjx4XNffVbyUzPEEfbnR76SiHbfTidIvdpYMUfx56sM3m0kGK2OXPbcBJ/igdV6IGupvvTCtKB4lOl2IlWsPo7kDHHME0sHP0Y43bSp9KLW32LTQ8rAXv6c7ySPCVFi5D54KdHT9FcbRY6cxpYHCZz6DHz3tE6SgR+nRhKE0ho7QUK9EajvTNssejTcPtbi59KjX1KXBaC25ffKbjMODzpYPEEZunC7s6dqOE3f7CWizy1uZWAxHljH4arO3Y38eojRQr0RpG57Affgf7uU4FV9tW+lRq6oc2YFYL3tEd3er1OutLB4kj1ukjK9zlHQbwSL/RglMyo71MBVXHbSQetZNiJVrD6JzZw28KucjDwRdKn0htDfk4+JnSQQ5Rv6egclmHrnNoJzMcBe5p4Ql9R2rYP/ks+vy+R5cOEx1utFntio7c8CJqJcVKdIaHmI9trisdpLYq3zCEhzi+dJRDcqZF2Ol7LT2verQI7/T7l1PMhg4eV4Ht3mQrFvrjIxhLjjhy914hdvo7UxSXYiU6w8XgytwhOogfuBPTPKl0kEPQ8EiLsN6VpaMckdG54es7/PU5rbnRwI2lgxT2A39lD57q5ZkKFgWNTp7OmpUoLsVKtIYBu3DvrkmHqtv5qHzX3tInUmO3uRN9HmVK6ShjNsW5+nBrc7+4VtUHhjp4+hNMby4qX1M6SGFD/tO3McVLnV46THSwbrA3vcmitBQr0Rp2N6eGHN7Guo+wFNtdkzfdg9jua0bHKhaXjjJm0z0RfLzDL/Pbw1RzwMrSQYpb60+swVKvN6t0mOhYxyEjK1EDKVaiE5xtJta5qXSQmvusEZxueekgY3aGZdjlm6WDxDjob46cpgUd3/PvBnGxFzfvb0dMrq7mbmB7cysoSkuxEu1vikeYirvdWjpKzf3IbZjqKaWDjNlzdOEaq0sHiXGwRBc2Z7Im9nqH72K613pI6TDRkeaZjSFrSweJSLESrWHQHhxep5U5zgbf7vj+4A9m0JfBk/WUjjIm8/etRdpUOsoR6daNquMv0kc3Ll6d+7hgvTfYjCVea0bpMNGBevVgJJPAorwUK9Eadja7aBx9GD+7wJngK6VPovaGfMMenOyU0lHG5KGOw3aXGywd5YjMNxfD7iodpLDRrg53Z2VZ0+X+xSCe5mfyWR2TbrYZGE673Sgvb4DR/h5pBta5vnSQFvB992CmCw67/ebk6fIoi7DRFaWjxLgYvRWxMV0dmgb8g+sw2+uam1tHTJ4p+jDc4X2PohZSrET7ezz4lm2lg7SA25qrVs5rLq2ssz4X68L3bCgdJcbFfGQa2H2t8le24Vh/3myYGTFZZpkuIytRCylWot0tcC5GfKfZqSUOZrcvgHMtKh3lQc1trlj539JBYpwcB27PNLD7+Kx3GcJPe2kLjHZGO+k3FcMd3qo2aiHFSrS70y3EVtflfu2YXApOal441tklZmCVH5YOEuNivqkYsLV0kFrZ5W9ch35/7IzSYaKj3DuykpHrKC7FSrS3LueZj7W+WzpKi7jb1ejzrNJBHkSvi8G3rSod5YhNMw0jHT43fJFe7OrwZ+EnrfEHVmCedzqmdJjoIP365H0paiHFSrS3aR6mG9enE8cY7W42WHy83tJRDuoYZ2DQt9tgLdKM5q4760oHKWqxPuzMpdFP+KZ3GcZj/XbpKDjJS51UOkRMuIalkE/OqIMUK9He5nkC+HzpIC1j0BV2YLlzSkc5qEc4ETtdlr2j2sR8PdiVaWA/YcBbfMGIPr/vaUVXrkz3Ul/2Tl9K55cOsBjaYOQ62kCKlWhvp1qCXb5dOkgL+YHVmFPrYqXL40zHyqxYaRvz9GBHizf4nBhD3uQOTPG6gqvJFvhLf+1oPY4xp/RTEhOs0dxK/J7SQSJSrESrGLQbTD/En3s6uCp3hw7Bja7DFBfW+O5pn2eAj3Z81/f2cbyp2JaNUvfrm/7MIB7tbfoKPH6vC13q5c2eVb9vReknJCZYo9nbp9Nb1UYtpFiJ1nBvB/vlh/RT/c4F17TBuobJ9BVwrrmlgxzQmU7Abl8rHSTGSU/zRsQuQ6Wj1NRHfExltJ/9ZE8F6/Yb/sdZGip3+XXvKf1kxCRYCB2+ki5qIsVKtJbuQ/ruhzoG211psHTwlnKZ3TjBWaWDHNAzwQ1uKx1kXMw2CyMdPf43rdnZ5/bSQWpr2J/4Fvq90fmT+sin+R9/a7mGYf/pQp9sjnNHO+ttLrDPb2TUQIqVaA19+uEQdwo6w0Js9r3S8VvMWteBJ5YOcgALPQ6V71pZOsq4mNLcInRn6SAFTW3ex727dJAau9sbDOJ4rznkCbGHq9dT/Ief0YN1XucP8l+oQ4yuWNlkR+kgESlWolX0Nxd0Hsq95ykeYwpucnPp+C1miy+o8ASzS0fZr9Odhb0+nRUrbWOK+ZAGdAcx4lJvM4AneYUpk/CIC/yZjzlXlyHf9nxvak7HjfY3Oq6yNaNoUQcpVqJ99XsM+HrpIC1nuLnKZ5mHlY6yX08wHxt9tXSQGDdTzYMs3D6oEf/gcvT5HRdM8GN1O9m7vUo/dvtPL/KN0qcfk+jekZVOHu+N2kixEu3rRKdhwBdLB2lB37UOC5xby/eI0QXGn80EhTbS19zOYU3pIDW32qusx2Jvbt77nhjdXuwLnmMq7vS7Xub2dDTqKKcg08CiJup4IRIxPh4PbkkH3sOwyjXo9pjmWqE6OcspGPLZ0kHGTVfznbiT98HqNwMjKVYe1LXebCce5k8mbHPxJf7C3zkeQ77q5/yHPaVPOybZvdPAdpUOEpFiJdpXnyeB76Zvw2EY8RlwYXNyTp08RQ9u8qPSQcbNHLMx1NHt144DawyXDlJ7w/7NJ9HjVzxrQh7hdP/tVeZgu7/zQlfmv0rH6bUArMs0sKiDFCvRrk5xEgZckwWCh+W7NmGeR5UO8gBzPUED17RRs7Lu5pbcnbzB9ugYwVYjpYO0gG1e62aVGf7M6eN87F7P9wFP1GXEbX7Na9NnoyPNNhvDHX0DJWokxUq0q9MtwzaXlw7Sota7BlxSOsgDnOwcjPhUJqa0lRPByo6eCjd2d3iDLTjd680cx+PO8jve6yyM+JwX+FBu9XSoWWZjJJOoox5SrER76nGRftzdRpOFJtdmXzOMR1hSOsr9PM5R2JZtE9rMUWBTJhyNyYiPeJ8RDc/xS4fYKvdAuhzt3/2Vmdji7/x8+lN1sBlZQxZ1kmIl2lOvJ4DLcvFzmEZ8xzYc4+zSUe7np3Xhi7aWDhLjarTLytqMrIzRgLe6Cr3+0LnjcsQn+JDnmoaNftdrbMnuXx1sjjkYzlbiUQ8pVqI1dOvF2Gf1n+QUDPpC6eAt7NvWGV21Mj53bsfDac7CkE+VDjKuDu213Z6OAetzc2HMVnullTjWWyw8wmMt9mr/69EauMzzvD97QHW42eZgxMrSQSJIsRKtYvohtox7oi7c2kaLsCffFlej4Ymmlo6yz9NMxd2uLx1kXC1HZ7dD7M0C+0NW+YZ/QcOFXqrnsI/T5eHe7c8t0DDow17ia/mv0PEW68UeW0oHiSDFSrSKeztRjG2551RPA9/OfaEj8hEjeHRzik558z1JD650Y+ko42oadPSGAUtMw3arSgdpKcP+2f8Zwe96rsZhHWOe3/UZz9CnssrveUlHF81xr9ENL7LiM2oixUq0oxMdi72u6ugLwCN3vTWY1lz/U94xzgGfyB5FbWaGbgzbWzpIi9noL63CAn9u0WH8/Mn+yVss0cDX/ZJ3Z/pXgJMhMxOiLlKsRDs62/HY5bLSQVrcat8EzzmCSSbj6SkWY3Mb9a6PUQtNwY709DhkP/BqO3GmfzD3kH5yoT/wZS80Fau82tNcmhVD0fRQ8P3SMSJGpViJ1tB/CGtWGs43BSvcUjp2i9vue4ZwoqNLR0HDz4Av5e5v2xktVvZkj7fD8AkfNoKn+dUxTwXr9gTv9WbLUfm+X/H/8lsV+zSa6+juLh0kIqKVPEGlUjX3TTq4LneoVP6idOg28DAbVLZ6XukguMBWlZ1eWDrIuPtLlcoVpWMU9Mt2qVzXvESKQzPXlSqVAU8a0/c/1D8baL6jrvWXZpc+gaiZMw2qbPDY0kEiRmVkJdrPaY7D3o6++BsvN1iNWc4r/l7R8Hj9uNXVpZ+UcTc6btXJdzEXmYJdNpQO0pI2e62V6PM6Jxz0Oxvm+h3/59f1YdA3vMhfZTwrHuAYDay3uXSQiFGlL0Aixt8zwI/cWjpIGxhwKXj6mMa0JtJRnqwHV7Thf9fR3cB2lI5RTLc5urAjG2Icpsu8xiAu8NaDrC+b72d8wT84RTeu81JPdVmmf8VPOE0DG1PGRl2kWInW0A9j+ljtdz74UbZBHRefN4xTHFs4xykehcqnSz8hMe76mk0Ns2nu4RrxAR83gmf75f2UKw1zPMv/eXfzt2irf/Cz/j2FSuzXybqwIV1Woi5SrERrGL1Uvlv1oN95otMx5CvZ3nZc3OpH6PWswjmerR/3uLz0ExLjrtccsLF0kBY24E98F71e/xMrV+b6WZ/wEU8wC4M+4fl+1/Vp/Rj7Nd1R4C47S0eJGJViJdrNQx2H3dm2eJys9gNwQdE+9jM8DZUPGyj9hMS46222Hc1Y6JG40x/bhqXe2hypottRnucD/sWFerDHV/28X8u7YxzEfItRua10kIh7pViJ1jC6YmJwDN95sT7c6I7SkdvELt+wF6c5pWCKCy3FZl8xVPoJiXHX09yPKst5j0Tl695kFx7qLWbjdH/oMz7iqWaBr/sjz/IhG8cwQh2da7aFqNxcOkjEverR6i3iwRyHsUwD63UJpG3gOPqqXfoc7XTXFkowxdPMwq2uKv1kTIjRUrxzu7f3NtsZrh7j90/x286zwq1uc4+d9thlT8pYvMtpXqLLz1llsSdarg/sdp13+Yx1mfoVD2qO+TKyErWSYiVaw1hHVs6zAFt9pXTgNnKTG51nqqf7YKEER3mSBr5kbeknY0KMrsi6q3SMYu4tVjaN8fsf4a/2TUoccLe1VlhjpRXussqaDp4quNWfudAJpnnNvq8N+aqP+t8xP7vR6Y4yB3vTVDnqI8VKtIY5YPeDjKx0uUQ3rs89oXH1eefhYj2F7l6f6yEY8KHST8QEGb37PZZJju3p3mlga8b4/ZWd+4qVKU52Mhiyxx4D9rrDrX7kVqtss8OODlkmPMMyT/QsS/Z9ZdhKV/hXP7A1IyoxZqO/T+23RXy0sBQr0RqWgjsfpFhZ4DwN/HDMlz0xFpfbbqbFznJNkcd/kS58M+uQ2tRisG3M5dp3/Z5HOdMSy5q3MaDHDDPA8Z4IdrvHSmvcaaXr3OP20ic6Qfo93COc57GOud/X7/Ii13RwERyH53TIu23USYqVaA3dY/quY52OEZ/K/PVxdasfegye53sFluae6ZEY9KkOuUPeeeaBjWP+rR3yAR82Va8eC5ziWA91jDlmmWWGmfu+b5pTnILKoD0G7XSLH7nOLTbYZpMdLb3QfKY5jnKGJ3mceaY1x+cYsMKgk3Vb5BGFbi9EKxsdWfle6RgRP5ZiJVrD6MjKg42XnGMxtvta6bhtZq3rna/hPPMmvRdGwwUWYpWvZipLmxqduLTlEG4xVAabIwbr/Ag0zHaUoyy01ImWO9lxzT2waOjTh/mO8SQMWW2Ne6x2vZV+YHVLbW6w3ElOd6LjLHWSBff7s92+4iOuwvudYYY/9Z023ZQiJk6nr6GLGkqxEq1hdHrHlge5E/o8jE5aivE06HNeotepTpr0YmW2Z5qKa5r9XqL93Lu8/kjGQytbbHETGrp169HtaCc53UmON89cc/YVLz2OdrRHqQwZNmjI7W50s5ttsN0OO22zvfD0qW6zTTPNHFPMtMRRlltkueXm6NGjR+M+373Zaje7zCetM6DS8Hs+bJ7l/t4L3FP0TKK1nGYmtuRVE3WSYiXaxzwPA18uHaQNXW63Xkuc5tuT/MhHewz4UMZV2tYyHNrIysFUhgwZwPWu9wn0W2yhRY5zsoc6pTlOS0OvXlPxCI8Ae222xXYbbbbJSnvcoXK7AesncDetGZZpWGABjjJXw1EWWGCGGRboN+d+hcn9bfEt3/A9t7v9PuVV5ev+0Z/o8wh/5FV2T1j2aDfLdWNzdo+LOkmxEq3gRH3Y9CAb1z7VbNzlm6XjtqFNLvdMXX7Wf0zyIz/PbNzZ1lP7xrYiq32Nrlk5spGVg9nldrejoaFLw3ynOtPpjrfAPPPN2lcM9DnKUft+rlKpmv+kwh3Ny/577jN6e8cYS4GGRebv+7eFFqK/2UGq0Uznfn/v3x7rrbfena51jWsNGNnPiPOgv3aCF+v1m77vP1PqxxidrQfrrC8dJOLHUqxEK2g0P7oPNgms1wX6cGfb7vlT1uc9E48wy7ZJfNTZzSafl7b1fb7RkYUVpWMUsxysnfCJV5XKCNZY46vot9B8C8x2jmOd4iGmuX/R8MCS4SHNfz5sEp6V6j5/b7TaCuussMpK66yz3o4H+fkd/sojnGqKP3atqychcbSDpbqx3rrSQSJ+LMVKtIIZujBgz0G+Z4lHauCrk76qojNcZYXlZrvYRybxUS/0EGz1mYP+t29102FSi8A66W6e/07Dk/zIu9zVXEb84eZXZlvuaEssdZJZZuoxX8MiDbNNmbAcA7aqDNiC3bZhu23ustFK99jkzsN8Zm7wJ95jodP8rRdYPanPbbSm2U7QwIoObq0aNZRiJVrBUXqw09aDfM9JzkDlc6XDtqnb3WS5Hhf5xKRtDN3niWZjVVtPAut0C0wzOrmpvK22ur75/6earttsDfMxUy+ONw0cfZ8Nkk/VNaZjV9bd50bKeusx4G6DBm3HgB3YY6fKrnEpzitf8G6v0uV8v+cNbV3wx/iYZRHs+y2IqIUUK9EuLtaP29NXYIJs8E1P0vBIS909SY85z3N04WNtPQms003Tg6HaLQLfYw8tPhlmwP/zEM/V7bfd4T1ZuRIPYlazReuPSgeJuK+x3RGKKGuZHmyz+YDf0dNc23DZpE8l6RyXgtObS4Inw2Mch60+VvrUYwItbI6stHZZUFeb/YVbMcufNTuTRxzYvOZeebeWDhJxXylWohVM04XBg8yiPc/x2OZTuXc4Yb5mHWa6aJIer89Lmo+bD852NlUPhjNJaUJUrvUqm3Csv77PTmcR+3OcKUb79kTUSIqVaAWjDdBGDliINDxWP+52U+mobe3T4JJJet8421kY8KWDrlWKVrfINOx6kI3J4/B9wT8ZxBP9QaZ+x0GN7nd3w4O0X46YZClWohUcqxfbDrhyYa7H6cU12bZ4Qn3FAE53yiQ8VpcnWYYNPpEPzrbWowsj2X1owuzyNl/HFK/w1NJhotZOBTdkhkLUS4qVaB0jB1yPsswjweeyYmVCXe02THPxQVrWjZd+z9aDy9xT+rRjQs03DXszfjaBtvlTN6LXX0xKj5hoTQ1ngttygyjqJcVK1F9vsw/DlgN+x6MtxjaXl47a5u5wE3pdaMaEP9bZzsOAD+Vjs83165FiZaJd5Q0GcI636C0dJmpqkXkYcGvedaNeUqxE/U01B6w5wJ93eTb4Yja4nWB7ml1sHtHsOT5xevwC+L4flD7pCXci2NChF+vdzY4lWV4/sUZ8xL8ZxJP93gQ2uIxWdqw+bM7OfFE3KVai/hrNSUcHutdztIdjyNftLR217X3eII7x0Al+nOM9FsMu64BdafrAUIfOEu9pNqG7o3SQtjfoza5Atz+atB39orWcnGIl6inFStTfNAvBXQf484vMxSrfztD1hFvrG+j2vAl+nAucgm3+L6uQ2lyjWaxlZGXirfAy67HY3zq2dJiooWP0SrESNZRiJeqvx1Swc79/OtVj9ONO15UO2gGGfBk80uwJfJRuz9OH6/yw9AnHBOu1BNxdOkhHuN6b7cbJXmNW6TBRMz2O1oOtNpaOEnF/KVai/vqbE0Xu3O+fLvJ48LkDFDMxnkZ8zSosntAtUE91CYb8m6HSJxwTrMs0yMbFk+RfvRtdXuw38/kf9zO92TT0htJBIh4ob1ZRfz3NiSK79vunpzQXKH+2dMwOcZ270e/cCWwv9wLduMO3S59sTLje5gXSytJBOsROf+VmTPPy5obvEaOmWYCMckYNpViJ+pthGRyg4ePzdePKvMFOkk2+hoYLmxeZ4+9YT8OIz6fFZwdoNHem2lE6SMdY63fchWXe4YTSYaJGZjka3FQ6SMQDpViJ+pva3A1sf0twZzsPfD0XO5PmE+Chjp+g4z/CGRjw8ezu1gHu3Q1sfekgHeRr/g6c548mob1rtIrpFkPa8EZEHLqXqFRubraGvL9n26yyzsWlQ3aQmb6vUvnbCTr+51Uq3yt9mpPmNMMqq51bOkgRy1UqldNKB+koU3zIkMouvz2B0zmjtTxZpbIzWy9E/WRkJepvdC+w/XWh6PZwM7Euu0ZNot2+BJ7YbOc3vpa4EJX/Kn2aMSlGd5Xbma0UJtWAN7gB0/xxysRoOgms6tCOT1FrKVai/kbnVd+yn44bc1yiG185YHf7GH9DLrMRR7tw3I/d5ddMxa3Ngija3eh6tA2Z8jfJrvdy23Ccf2pO/olOdzq4PTcOon5SrET9zQW799PycYmHoWquoojJcrW7MMsFesf5yEd5ogaucEvpk4xJ0Q+G09B10n3DPxnEuX63OXodnW10ef3tacQb9ZNiJerv3kV/P/kW+nRTcIcflY7YYdb7Mro82fxxPvJ5zsWQD6TvRocY7aR+j92lg3Scvd7qU+jzCs8pHSZqYHTLlLtSrET9pFiJ+hu9IN71E/dep3kGKl+2uXTEjvNxwzirOct5vDT8nH7c5vLSJxiTpBtUGVkpYIvXuRXTvMY52Reswy0wD0PWZM1K1E+Klai/0X4eK37ifs/pjsNuX89d2Ul3o2vR63njetRjXYwR7824SsdYDjZnzUoRP/JaW3CGN5pTOkwUtUQftmb9Z9RRipWou0V6secn+qg0nGcx1vtO6YgdaJsvqfDEcZwI1u2XzMRtvlj69CZVZ78Lj25Ivj2LeosY8THvNoSLvUxf6ThR0BJTsD0dj6KOOvtjMlrBdN3YY/sDvj7Nk/Xh+24sHbEDDbrcZhw3jjuCLfVU3bjc9aVPb1It1sCODh0fHC1WhjINrJABb/c1lV6/65JMBetgx5uK7daVDhLxk1KsRN0dpQ97bHvA1+d4LPh86YAd6ltuxyxPMmWcjniuR2DEfxssfXKTag46t1gZ3bp4jT2lg3Ss9f7MHVjgr5v7QUXnaViWkZWorxQrUXf9zZGVB04DO99CbPC10gE71GafQsMzxm2u+y/pw7W+XvrUYhKN9k/PyEo5lW97i50aHuINE9LoNeqvzyINrMhtg6ijFCtRd8eYip023u+r3Z4NvpPlgMV82m4c66JxOdqjPA6D/i170XSQ2aZi6CduRcTk+qB/N4zn+8VMBetIU8wDq0oHidifFCtRdz0aGHzA/lDLPQxDvm1L6YAd607fRMNPjcOxejzHLNzmK6VPKybRDFMwaEPpIB1uuzf7EWb4k+b+bNFZpjb7md1dOkjE/qRYibo7xhTseMDlzMMdja0uy334Yjb7jEGc7+wjPtbRnqkbX3JD6dOKSdTIffyaWOVVNuBobx/3Vq9Rf1ObLQLuKR0kYn9SrES9dZmigaH79WHocYE5WON7pQN2sMrlNmKZxx3xO8njnA7+K8VnR5mnH3szslIDl3u/EfyUny0dJSZdn7mQadVRTylWot6mWQJuut9X+zwFfNau0gE72vd8B1M837QjOk6/l+nGp/2w9CnFpJqiR9as1MNOr3c1+v2V00qHiUk23QJwe+kgEfuTYiXqravZqOz+99uPdRqGXFY6XoerfAg8xklHdJzznYKd/i99zDtMbz6DamSzN9mIWV5jdukwMamWa2Bth20bHy0jHxRRb9MsBT+631d/Rjd+kPUNxX3dD9Hnl4/gvWSGXzEHP/TFbGDbYRaZid3uKB0kwKe93Qhe4HdKR4lJNTqDYb2h0kEi9ifFStRbT7PD9X33fp/ZbAf5w7SvKm5Nc4uDxzWb+x2OEzwJfNrq0qcT0dGG/Yvr0OPlzikdJibRaDvQ1SlWop5SrES9TWnOpL3vndfTPAS7XdqhPb/rZK+P24ZTXXjY+zr9kqOw3r+XPpmYdLPSZ6Vmtni51Vjozc3NbKMTjK5SujMTcaOeUqxEvU21CPffo+ShlmFnetfXwpVuwnTPa/YiP1THeyYqH8iOUB0ofVbq51v+VqXh8X45G0t3jNGNizcYLh0kYn9SrES9TTUVbNr3lS4/pQfXZkf4Whjwn+CnHHcYP93jhY7Fah/OPb2IGhjwTl/DFH/YnHAb7a7PAlTWZBpY1FOKlai3Y8DK++xRMsWFqHy6dLRoutyt6POiw7gPu8Bz9eEq3yl9GjHpuvfNlI862eMN7sQ8r0s/+46wyFTsyghn1FWKlai3hWDLfQanLzAPGzIJrDZu92UVnuXYQ/7ZS5yLPd6RcZUO1NXsz7O5dJB4gK/5ezQ8ObuCdYSFpmDPfWYwRNRKipWot9GNi388ON3lGeB6K0tHi6Y9/s9OnOaJh/iT8/0W+IrvlT6JKGJ0LC4bVtfNsH/zaSP4ZU/OypW2N9cU7E6xEnWVYiXqbXTZ3+Z9IysLnYPK96wrHS32+arrMc1LD+mypuESp2O7/7Gt9CkUtBNMa7Y/7SRdze0zMg2sfrZ6vbtwlD8/gm3JozUsNQ0786kadZViJepttFXV2n0jK6PbFg/43AN62kdJg/7JXjz8kMZWZvslM3CNT3X0vfWVKsxqdhTqJF1mga2lg8R+fN/bDOJ8f9CBhXRnma4Hezv6plHUWoqVqLfRe3o/LlYeaSG2uLJ0sLify30f3X7lEC65H+ciDbynwz8iR1/bjUy2iVoZ9l++iB4v8dS8OtvagkwDi3pLsRJ1NsUMjNi8bxxldMXKFbaXjhb3c4+PGMaTPWaMPzHPy/Xgqy4tHT4KuXdkJQvs62mX1/gR5njNYWyeEa2i1zxkhDNqLMVK1Nli09x3Q8W5zgFfKh0sHmDE+2zGIr82pu9veLbzsdN7rS0dPgrpbq5Jy5qVeqp839sNajjXyw6z6WvUX4/ZYFXpIBEHkmIl6myqbgzZ3fz3J5iOO9OTo4ZW+0fDeKbzx/Ddi7zcdFztox29XiWi3v7PBw3jV70o1wttqq+5NjQ3DaK28uYTdXbU/VpVdXuyLtzsrtLBYj8+5GZM9TJzHvR7f8HZGPIvzb2wohM1miucBkoHiQPa7m3uxByvbI6DRbvpMhWZjhk1lmIl6mza/UZWljpHQ+XKLAOspRv8ndEJXs96kO+8wO+g8iGfLR06Cupu3tG9vXSQOIjr/JEdOMOb9JcOExNgquPAHaWDRBxIipWos4WmYreN4GgnYcRXS8eK/ap80O2Y7g+bCzb3r8cfOwbb/GuWdHa4NIWsv8qlzcmaz3FJdgVrQ/fuRLj7CI8TEdGRfsdelWvNB3+iUjULl6inZ9ioMuw9zSWbP2m6N6hUBr22dNiaOM2wymrnlg4y6ZaoVIab22ZEfS33A5XKyuY9+GgnJ6hUKieWDhJxIBlZiTqbo9ePR1YuAl8pHSoO4nIfRZcXeP5+310anuN3wLf8Z+mwUdhysCF3dGtvhbcZwNI0iGxDoytWqoxwRkQcul5vV6l8EcyzTWVwjFvjRinzfV+lssPv/sToSq/n261SudXZpYPWRueOrDxOpXK3U0oHiQfV752GVLZ6SaaCtZmfUqncbmnpIBEHkpGVqK8ec8FK8Dh9WOv60rHioDb5U3diur/0D07S2/x6Q7+X+1tTscFf+EHpoLUxej+zEy8As2KldezyDndilj+zoHSYGFejn7MD+1ovR0TEmM3yMZXKW9Dt7YZVLrewdKx4UM+0pjkLeoN3epZznec3fc2ISmWT5+suHbFGZhhW2eOJpYNMuhepVK5xdOkgMSbPt1Wl8q/NLaejPbxSpXJZs2iJiIhDMM+XVSqvxCJfUqm8syPvQLeabs92lUGVyojN7nKPPc3y5R6/kRHdBxhWqTy1dIxJ9xsqlSuaGxhH3c30bsMqm7ywdJQYR+9QqXzMrNJBIg4kFw1RXz3NXcA2YonTwBczaaQFDPuEZ3intWiY4xjLTcFel3q2f8t0g4gWtN3r3Iq5/joNItvI6IjKRoOlg0QcSIqVqK8eM8FanGIx9vpa6VAxRmu9xtO8xfXW2mSTlT7rl7zINYZLR4ua6MHouFK0hlXeaAeO8UemlQ4T42T0puCuvDNHffWUDhBxQN1mgK24UDe+Y2fpUDFmu33P97zOmWbjLnflwzDu5ziwzq7SQWLMPumJXqLhJa7w8dJhYlwsAmvtLR0k4kBSrER99TZ3nVmt15PA1zKBqOXsdU3pCFFTox07hjKy0kK2eaMnO9oCb/RN60rHiSPWowtVbiVFnWUaWNTXDA0MGXaaxdjlqlzWRBsaHS/MDkvRCu7wZjtxuj/IVLA2sFA/BmwoHSTiwFKsRH2N9rdeZa9H68cKt5aOFDEBVuDe13snuXfNSsZLW8v/+F90+XVPKx0ljli3LgzbUzpIxIGlWIn6Gn11Duv1cH1Y6bbSkSImwOjFeuf1nhktzzbkMqnFbPMmazHPq9P3quXN0ItB20sHiTiwFCtRXw8Bd5vhLA1cmYW4EW1kdBLR3syWbzm3+zPbcLZXZ/pii5tjKvbaXDpIxIGlWIn6Gr3TPGyOk8HXSweKiAh81GfR7eddWDpKHJG0WY4WkGIl6msp2OpoC7HHt0oHipgQoyOGM0rHiBizLV7pTsz31g5cbdVOlpmJ3VaXDhJxYClWor7mgE3NSWDXZRf4aFP3gGNKx5hkc0zHULa/bVEr/Y2dONVvm1o6TBy2hgZG8vkadZZiJerr3gXHjwdXGSwdKGJCdOaajan6MGxH6SBxWEa8x/+i1+9lV7AWNk0PhrIiNOosxUrU1+jkgkHLMOx6Q6UDRUyIdA+KVrTb263EdH9scekwcZjmm4YB60sHiTiwFCtRX/3gBDOw0Y25pIs2NXqZcHTpGBGH6KbmrmDnek0aRLakRgdumR4tKMVK1FWfblRO0Y91aQgZbWu0d/TM0jEm2Sz9GErn7BY24uM+j24vdkHpMHEYeizBvevmImoqxUrU1SLTMWC6qVjf7PIdEe1h9Dd72NbSQeIIbPNnbsUcb3Fs6TBxyBrNzRGycixqLcVK1NsU88FtWbESbWt0gX1P6RgRh+FO/892nOll2RUsIiZCipWoqym60Wi+Rn9YOk7EhLkDmq1PI1rLsP/wSfT6bU8sHSYOUbfZYFvpIBEHk2Il6mr+/RZs3lA6TsSESYeDaGV7vNUt6Pdqx5UOE4ek2wKwqnSQiINJsRJ11a2x7//vcWPpOBExrnr1YMTu0kHiiP3IW+zEuf5YX+kwcRhGSgeIOJgUK1FXXfcpVu62s3SciAkzYABdzfVZnWKuGRiytnSQOGLDPuhTKj1e4un3eeeOiBgHKVairuY3+6zAHZkoE21sm+06r1jp0oWqub1AtLZd3uRW9HtdVl+1kIZeZCpq1FyKlairKfdpVnWXwdJxIibMsBE0MoEmWtgNXm87HupP8kpuGb2WgTtLB4k4mBQr0Qo25u5rtLFttqG7edkQ0YqGfchH0O0XPbV0mBijRnPL9LQGiFpLsRJ11bNv5vOINXkrjTY2aEhGVqLVDXmL76HH651ZOkxEtI8UK1FX8/ZtXbzbxtJhIibQdjvQZXHpIJOqu7lmJVM828ct3moPHuY1paNERPtIsRJ11bdvzcqeFCvR1vbYjS4zSgeZVAvMwqAVpYPEuBnxf95vRJfne8l9Vh1GXfU0J5/eUTpIxMGkWIn622Nr6QgRE2jAXjRMLx1kUjU0UKXDQ1sZ9teuRbffz65gLaDLVEi3o6i3FCtRf3ttKx0hYgJtbS6wX1I6SMQRu8kf2IGzvTWrsCJiPKRYiXq675SYgYysREdIM71oB1/zQRWe4oV5TUfEkUuxEvXUc5/FxoN2lY4TMaFuB0vNLh0k4ogNe6NvYKo3Or90mIhofSlWov5221Q6QsSE2oN7V3FEtLp7vN4gjvXKZof0iIjDlmIl6m9d6QARE2z0NT5Pf+kgk2h0Ye+e0jFiAlS+7K/txdP9QVauRMSRSbES9be+dICICTb6Gp/WQZd1XZZCNi5uW+/ybfT6HY8qHSUiWluKlai/XM5Euxt9jS/sqE4ro9OD0hKyXd3j923G0d5sfukwEdHKUqxE/W0uHSBigo2+xqebUjpIxLj5gb+1B4/2Ox00ZhgR4y7FStTfLaUDREyw0df4/I5asxLtbti7fAl9fs9FpcNEROtKsRL1t7J0gIgJtxEsLx0jYhyt9WfWYr7XNdcoRb0sA6vTwT7qLcVK1N2eTAOLtlfZABaUDhIxrm7wVrvxSH9oWukw8RNGOzsNGikdJOJgUqxEXQ01/7nCQOkoERNsxG3guNJBIsbVsPf6OHr9qqeXDhMRrSnFStTToDXN/7cqxUq0vcoWsKh0kIhxttUb3YHZXuPk0mEiohWlWIl6qvY1i7vZrtJhIiZY1VyZtaR0kIhxd7PX24qzvM6s0mEiovWkWIl6G3G3vaVDREywyircu9w1op0M+7APo8vzvaB0mLif7WCq7tJBIg4mxUrU1WZ7sNONWfoXba+y3hDmmFM6SsS42+0NvqMyxas9TqN0nNjn3na0U0sHiTiYFCtRV/fYho2uKh0kYhJstgN9jikdJGICrPJGm3Gs16WbUI1UkPIx6i7FStTVV7zC/3ipO0oHiZgEK21An6NLB5kkXY4Ht5cOEpNixGe8w6CGJ/mz3MePiIiIaC3HuEZlt18rHWSS9Pi4SuVvSweJSbPYF1UqazytdJRoWqJSqZxZOkjEwWRkJSKivHW2YIoTSgeJmCBr/IHbcJR/ylYSNVEZBj2lg0QcTIqViIjy9liBhmXp8x1t6zp/Yw+O88qsXKmFoWZHs06ZfhotKsVKREQd3AoWm146SMSE+U//bgS/4ldKRwk/7miWWyRRaylWIiLq4B6wJMVKtLGd/totmOG1Ti8dJiJaQ4qViIg6uB4sNaN0kIgJdKdXWo9F/tny0mEiohWkWImIqIO7jWCumaWDREyoL3qnIZzvz/SWDtPhqnRaiVaQYiUiog52ugddHlk6SMSE2uOtvohev+5ncxVS1LD1YHHpIBEHk7eJiIg6GHQdOKt0kIgJNujVrkGP1zm/dJiONmwbmFs6SMTBpFiJiKiDQT+AtGeLDvB9rzSIE73N/NJhItPxot5SrERE1MGw2w1iuaWlo0RMuK94iz041+uyA14xg+4Gx5UOEnEwKVYiIurhdhsxLRcO0QFGvNNn0O2XvbB0mI5VGURGVqLmUqxERNTDHTZiRvpPREfY4Pfdjhn+wqOzH1URld1gTukgEQeTYiUioh7W2IYpTtJdOkrEJFjpT23AUn+d/aiKGLQSLCkdJOJgUqxERNTDHlej4ZQ0hoyOUPmotxnR8Dh/kw5DRewxhG5TSweJOLAUKxERdXEtOCWXbdEhhvyzT6PLs/1aVk4UsMFuTHVU6SARB5ZiJSKiLq4wiNMtKx0kYpJs93u+hmne5Fmlw3Sg3QbRbVrpIBEHlmIlIqIu1roNjTTKiw5yl9fYjGleny5Dk25jc2RlUekgEQeWYiUioi52+gZ4apbYRwf5hpfaijO9y9Glw3SYrQYw1YLSQSIOLMVKRERdDLjWIE7ORLDoIJVPeo8RPNofZ6n3pBotVnqzeXHUWYqViIi6qHzfRsx3TukoEZNot7/0EcO6/Zo/ykL7SbTSdkzL5sVRZylWIiLq40YbMMsZeXeOjrLVn7sB0/yBi9MichKtBYv1lQ4ScSD5OIyIqI/1rkWXx2T74ugolRv9thWY6x9cmHJl0oy2hTwqxUrUV4qViIg6+SI439zSQSIm2ZVebyuO8zdZaD9p7kSKlai1FCsREXXyVRsx1wWlg0RMskH/5u/t1nCOd1laOk6HuAUcn04rUV8pViIi6mSzr4PnZPvi6EDv8N+G8URv1V86TEe4UYXFebajvlKsRETUyXZfNoCznFg6SsSk2+RVLkOfn/eH2cZ4Emy3Eb2ZeBf1lWIlIqJOKt+yCUucm0XG0YE2+SNXqPBHfjVXKRNuT3PVSrZLj9rK20BERL380F2Y7oIseY2O9EO/Zy1meYMnlQ7T9na7FZxaOkjEgaRYiYiolwH/B55hfukoEUV8z29Zhfne6eLSYdrcLreocGaacUZdpViJiKibr9iOZZ5QOkhEEZXPeY0Kp/o7x5WO09ZGrLAXc7NqJeoqxUpERN3c5lLwC228wHgQMtEtDmCv//IXduBU/50pShPqWpuxIM9y1FWKlYiIutnmMgM41Rmlo0yQqtk3e3npIFFbw97hfWh4rL80p3ScNnaTbZjl2NJBIvYvxUpERN1UPm09jvW0Nn2XruyBNh45iiO31R/4gCE81z9bUDpO29rsZvR4VH4fo57a82MwIqK13eXbaHi2KaWjRBSzx2t9FV2e40+zAHzCfBOcky72ERERMVZPs0el8pTSQSZEl7eoVL5YOkjU3nzXGFHZ5TW5mJ4g59mrUqXXStRTRlYiIuroh74HfiUXaNHRNvlNN2OaP/KSXLVMiJVuAY8pHSQiIiJax8vtVVnlgtJBJkBGVuJQPM7tKpWNfiGTwSZAv39v/j7OKB0l4iflHkVERD192CYs9hyN0lEiivqWV1qNed7myfl9GHe7fctunOas0lEiIiKidbxNpbLdwtJBxl1GVuJQ/bz1KpXbPCk3WsfdcVaqDHtVntuIiIgYq/OtUqm8UfcBvmOauS3ZWDHFShyqXn9sm8qIWz0koyvjrMsHVSpf1V86SkRERLSKaf7JiMptB9il5zT/5rv+xPTSQQ9ZipU4dD1ebadK5VseWjpM23muIZW9Hl46SERERLSOh9miMuwd+7mTPM0/GVa5wemlYx6yLn+pUvlK6SDRUmZ6hwGVYVdZXDpMmznB9SqVN2QiWERERIzdv6pUtuznTvIsH25O3FhWOuRh+A2Vyu2lY0SLmeldhlQqH7a8dJi20utvjah8x9LSUSIiIqJ1nONmlRH/afYD/mSOj6lU3tKS8/d/WaVyT+kY0XKW+EBzwtLnzC8dpq08xTaVzZ5VOkhERES0jh5vNKKy1fMf8CdLfUOl8iulIx6WFCtxuJb6rEql8i5zSodpI1PdoFL5f5kIFhEREWM3z60qlescdb+vL/OtFCvRkY7zKSMqe/yrmaXDtJE3qVTuNK10kIj7SvUcEVFvm7zRDpzqd0wpHSaiBu70J67HFL/qT1OujJvL7MSxzi4dJCIiIlrJDO9Tqax3yX2+eoyrVSq/UDreYflFwyor9JYOEi3qLJerVHZ5XYr4cbLEV1Uq7zxgZ6eIiIiI/TjFRpXKlfeZo3+qO1UqTygd7rA8y1aVtdnRKQ7b2dapVHZ6WcqVcdHt7YZVvtmSOwxGREREMQ2/bYfKkH8yo/m109yjUjmvdLjD8jSbVDa5MPdw47Bd1OwNssufm1o6TFt4jF0qmz21dJCIiIhoLXN9vNlx5d5pX+1QrAy7ygWlo0TL6vJ4G1Qq271MX+k4baDfCpXKn5UOEhEREa1mmZtVKus8TgOPtFelcnTpYIflYuub289u9JyMrsRhu7A5urLTr+d1NA5G29BeUzpGREREtJouL7JeZcSVTsJ5KpURs0oHOyyPdEezWBlxbYsWXFEHXZ5rl0plleenXDliP9fcFHpR6SARERHRev7AUPO+50O9QqVyo+mlQx2Whze7x4z+9erScaKFdXmhVc1Jki9JuXKETneDyrBfLh0kIiIiWs9M77VXZdgVzY2LP9iiM/Uf5laVvVaqVL6R3ZziCPT5edtUKiu9UE/pOC1tlk+qVN6lUTpKREREtJ6Z3tkcXalU9vjNFr2kONb3VXb7om0qd6cNXRyRbj9rzb4tKDK6ciRea0Tl65aWDhIRERGt6Cj/Y2ezWLnSsaXjHKbFvqOyx7+4S2WLny4dKFpcr1+wSaVyt2fqKh2nhT3RkMpKjyodJCIiIlrTTC/1dbf6hIeXjnLY5rhCZa+/caPKrsyQjyPW41ebk8HuclHpMC1suq0q1b5N0iMiIiIOUbclTjK3RaeAQcMXVSp/4xqVEa8sHSjaQL9X2aFSud7FLfzbUdqVKpW3lo4RMSoDpRERrWfYarfarCod5LBV9oKGDWg4Sm/pSNHydvk7b7ALp3tP2o0etu9B1pFFXaRYiYiIEu4CC+0AM7MoOsbBbn/vjXbgGO9wbuk4LepacEbpGBGjUqxEREQJW8CcbFoc42qPd3qbvTjHu5xUOk5LWgct2m422lCKlYiIKGEFUqzE+Nvlbd5rDx7mPzy0dJwWtMceNFq0h1O0nRQrERFRwnowz9TSQaLt7PZq7zWMx3q7uaXjtJxKhYYZpYNEkGIlIiLKGF2zsiDFSkyATf7I/xrCk73X8tJxWkaXo5zu8aZhq82l40RERESUsqjZ2PJWlcq/pmiJcXasT6pU9np3JjSNyTn+zqVutVel8t7ScSIiIiLKmdUsU4ZVKu/M5WSMu1m+bERl0N+aXjpM7fW7yUjzFkLl1uylFhEREZ1suq/tuzCqvDot/GICnOMqlcpWf1o6Su3Nd0/zt3HItS5K56OIiIjoZH3edZ9i5VWl40SbOtHtKpUdfj07zz2IC7zPX3i2pel6FBEREZ2u4Q/3lSq7/397d4ibUBSEYfQvwTZYBAqWwQpQrcFWNSykGtudsARMRSUaCWkwT5BKMHcBRTST93KOuvKzk0nu5L06h4F6yqqNK+e8VscAANAXq1zasNJlXR3DgL3kJ7fccsyiOgV4lK+LAahxyKm9ru1EJPyHXT7SJZlkXp0CAEBfbNtm5TvP1SkM2jib7POZSXUIAAB9Mc9XftNlUx3C4I0yc5EdAIBHTPOWZcbVGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf3MHlNortKmjaRYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTYtMTEtMDhUMTM6NDg6MzktMDU6MDCwRc7PAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE2LTExLTA4VDEzOjQ4OjM5LTA1OjAwwRh2cwAAAABJRU5ErkJggg=='
    }]
  },
  visibilityFilter: {
    search: '',
    modalSearch: '',
    filter: {
      value: 'All Items'
    }
  }
};

const data = [
  {
    "wafer_id": 1,
    "temperature_c": 457.4507123,
    "pressure_torr": 747.2872095,
    "gas_flow_sccm": 113.2150527,
    "etch_rate_nm_min": 93.85261427,
    "voltage_v": 5.139314499,
    "current_ma": 20.34174706,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 2,
    "temperature_c": 447.9260355,
    "pressure_torr": 746.3975767,
    "gas_flow_sccm": 116.9450054,
    "etch_rate_nm_min": 94.73875277,
    "voltage_v": 5.113329437,
    "current_ma": 20.02451086,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 3,
    "temperature_c": 459.7153281,
    "pressure_torr": 706.1307048,
    "gas_flow_sccm": 114.0261894,
    "etch_rate_nm_min": 95.51435903,
    "voltage_v": 4.625392062,
    "current_ma": 19.13768987,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 4,
    "temperature_c": 472.8454478,
    "pressure_torr": 750.0972942,
    "gas_flow_sccm": 121.1041805,
    "etch_rate_nm_min": 102.5748917,
    "voltage_v": 5.231833689,
    "current_ma": 19.99494668,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 5,
    "temperature_c": 446.4876994,
    "pressure_torr": 781.9848725,
    "gas_flow_sccm": 131.9717853,
    "etch_rate_nm_min": 89.02226153,
    "voltage_v": 4.40396693,
    "current_ma": 20.98168325,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 6,
    "temperature_c": 446.4879456,
    "pressure_torr": 721.7730364,
    "gas_flow_sccm": 112.2895784,
    "etch_rate_nm_min": 88.22922407,
    "voltage_v": 4.73832627,
    "current_ma": 19.74767574,
    "process_step": "Etching"
  },
  {
    "wafer_id": 7,
    "temperature_c": 473.6881922,
    "pressure_torr": 791.4544795,
    "gas_flow_sccm": 130.008205,
    "etch_rate_nm_min": 104.8929579,
    "voltage_v": 4.200364875,
    "current_ma": 20.83953526,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 8,
    "temperature_c": 461.5115209,
    "pressure_torr": 774.6332446,
    "gas_flow_sccm": 112.1832793,
    "etch_rate_nm_min": 91.29884206,
    "voltage_v": 5.623450607,
    "current_ma": 18.32666244,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 9,
    "temperature_c": 442.9578842,
    "pressure_torr": 737.9730003,
    "gas_flow_sccm": 111.5237279,
    "etch_rate_nm_min": 84.89571717,
    "voltage_v": 4.907380202,
    "current_ma": 18.7922127,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 10,
    "temperature_c": 458.1384007,
    "pressure_torr": 755.7541109,
    "gas_flow_sccm": 128.1859462,
    "etch_rate_nm_min": 91.11896046,
    "voltage_v": 5.866753614,
    "current_ma": 18.53135899,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 11,
    "temperature_c": 443.0487346,
    "pressure_torr": 807.9496542,
    "gas_flow_sccm": 129.2193638,
    "etch_rate_nm_min": 92.35957812,
    "voltage_v": 5.321179971,
    "current_ma": 18.86973726,
    "process_step": "CMP"
  },
  {
    "wafer_id": 12,
    "temperature_c": 443.0140537,
    "pressure_torr": 782.0064344,
    "gas_flow_sccm": 128.5140994,
    "etch_rate_nm_min": 107.4397018,
    "voltage_v": 5.179239285,
    "current_ma": 22.57436209,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 13,
    "temperature_c": 453.6294341,
    "pressure_torr": 760.2635096,
    "gas_flow_sccm": 106.8420259,
    "etch_rate_nm_min": 102.3986097,
    "voltage_v": 4.765508922,
    "current_ma": 21.45207759,
    "process_step": "CMP"
  },
  {
    "wafer_id": 14,
    "temperature_c": 421.3007963,
    "pressure_torr": 752.8695005,
    "gas_flow_sccm": 115.3404902,
    "etch_rate_nm_min": 104.1801649,
    "voltage_v": 4.581459986,
    "current_ma": 17.84615376,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 15,
    "temperature_c": 424.1262325,
    "pressure_torr": 762.2982721,
    "gas_flow_sccm": 128.2298859,
    "etch_rate_nm_min": 101.5597891,
    "voltage_v": 5.20918863,
    "current_ma": 20.87499659,
    "process_step": "Etching"
  },
  {
    "wafer_id": 16,
    "temperature_c": 441.5656871,
    "pressure_torr": 744.6470933,
    "gas_flow_sccm": 120.4154184,
    "etch_rate_nm_min": 102.5699494,
    "voltage_v": 4.971394396,
    "current_ma": 19.21883537,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 17,
    "temperature_c": 434.8075332,
    "pressure_torr": 696.8575148,
    "gas_flow_sccm": 109.2630715,
    "etch_rate_nm_min": 89.49534299,
    "voltage_v": 4.464291874,
    "current_ma": 18.63523083,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 18,
    "temperature_c": 454.71371,
    "pressure_torr": 821.2653373,
    "gas_flow_sccm": 124.5831794,
    "etch_rate_nm_min": 93.41118276,
    "voltage_v": 4.393256633,
    "current_ma": 17.02852107,
    "process_step": "CMP"
  },
  {
    "wafer_id": 19,
    "temperature_c": 436.3796389,
    "pressure_torr": 764.65975,
    "gas_flow_sccm": 112.8519274,
    "etch_rate_nm_min": 87.0806775,
    "voltage_v": 4.616518508,
    "current_ma": 21.94383739,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 20,
    "temperature_c": 428.8154445,
    "pressure_torr": 771.944418,
    "gas_flow_sccm": 137.9452485,
    "etch_rate_nm_min": 93.31609576,
    "voltage_v": 5.72838689,
    "current_ma": 17.2722737,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 21,
    "temperature_c": 471.9847315,
    "pressure_torr": 758.2627675,
    "gas_flow_sccm": 135.4484146,
    "etch_rate_nm_min": 100.4728399,
    "voltage_v": 5.885311167,
    "current_ma": 19.89607364,
    "process_step": "Etching"
  },
  {
    "wafer_id": 22,
    "temperature_c": 446.6133555,
    "pressure_torr": 737.946496,
    "gas_flow_sccm": 126.0409743,
    "etch_rate_nm_min": 96.07666628,
    "voltage_v": 5.081995659,
    "current_ma": 18.10737751,
    "process_step": "CMP"
  },
  {
    "wafer_id": 23,
    "temperature_c": 451.0129231,
    "pressure_torr": 754.4222656,
    "gas_flow_sccm": 133.610067,
    "etch_rate_nm_min": 105.4918466,
    "voltage_v": 5.059577118,
    "current_ma": 21.55168789,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 24,
    "temperature_c": 428.6287772,
    "pressure_torr": 712.0181571,
    "gas_flow_sccm": 120.6479135,
    "etch_rate_nm_min": 85.86867366,
    "voltage_v": 4.865471851,
    "current_ma": 19.33129635,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 25,
    "temperature_c": 441.8342591,
    "pressure_torr": 828.3125949,
    "gas_flow_sccm": 127.6543749,
    "etch_rate_nm_min": 99.00190681,
    "voltage_v": 4.626205861,
    "current_ma": 19.73107469,
    "process_step": "CMP"
  },
  {
    "wafer_id": 26,
    "temperature_c": 451.6638388,
    "pressure_torr": 722.96464,
    "gas_flow_sccm": 134.777203,
    "etch_rate_nm_min": 85.01357759,
    "voltage_v": 5.550071623,
    "current_ma": 19.79853147,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 27,
    "temperature_c": 432.7350963,
    "pressure_torr": 729.0410115,
    "gas_flow_sccm": 122.4549868,
    "etch_rate_nm_min": 95.75341175,
    "voltage_v": 5.749430558,
    "current_ma": 20.60514067,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 28,
    "temperature_c": 455.6354703,
    "pressure_torr": 746.7922239,
    "gas_flow_sccm": 117.4481283,
    "etch_rate_nm_min": 100.9226674,
    "voltage_v": 4.642632366,
    "current_ma": 20.02600953,
    "process_step": "CMP"
  },
  {
    "wafer_id": 29,
    "temperature_c": 440.9904197,
    "pressure_torr": 798.6422717,
    "gas_flow_sccm": 102.9537804,
    "etch_rate_nm_min": 93.28397947,
    "voltage_v": 4.966864649,
    "current_ma": 19.91345362,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 30,
    "temperature_c": 445.6245938,
    "pressure_torr": 760.43527,
    "gas_flow_sccm": 119.1686647,
    "etch_rate_nm_min": 99.40901283,
    "voltage_v": 4.82005348,
    "current_ma": 18.96319605,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 31,
    "temperature_c": 440.9744008,
    "pressure_torr": 722.9159261,
    "gas_flow_sccm": 128.2342318,
    "etch_rate_nm_min": 87.32214132,
    "voltage_v": 4.83190437,
    "current_ma": 16.85054125,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 32,
    "temperature_c": 477.7841728,
    "pressure_torr": 797.6301508,
    "gas_flow_sccm": 129.4563343,
    "etch_rate_nm_min": 81.69048017,
    "voltage_v": 5.474363302,
    "current_ma": 17.76289808,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 33,
    "temperature_c": 449.7975416,
    "pressure_torr": 781.9300188,
    "gas_flow_sccm": 125.0436507,
    "etch_rate_nm_min": 99.45623698,
    "voltage_v": 4.475215382,
    "current_ma": 21.43695948,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 34,
    "temperature_c": 434.1343361,
    "pressure_torr": 776.1530487,
    "gas_flow_sccm": 114.5870091,
    "etch_rate_nm_min": 108.9520819,
    "voltage_v": 5.186587876,
    "current_ma": 19.38836107,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 35,
    "temperature_c": 462.3381737,
    "pressure_torr": 781.4720272,
    "gas_flow_sccm": 100.2317843,
    "etch_rate_nm_min": 87.03164048,
    "voltage_v": 5.291295243,
    "current_ma": 18.67198044,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 36,
    "temperature_c": 431.6873453,
    "pressure_torr": 831.830857,
    "gas_flow_sccm": 115.047849,
    "etch_rate_nm_min": 104.7775534,
    "voltage_v": 4.943139531,
    "current_ma": 17.18854371,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 37,
    "temperature_c": 453.1329539,
    "pressure_torr": 825.5528469,
    "gas_flow_sccm": 116.9565513,
    "etch_rate_nm_min": 95.34738727,
    "voltage_v": 5.357227131,
    "current_ma": 16.56070572,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 38,
    "temperature_c": 420.6049481,
    "pressure_torr": 739.3985397,
    "gas_flow_sccm": 116.8707103,
    "etch_rate_nm_min": 84.31446783,
    "voltage_v": 5.059060736,
    "current_ma": 18.59358624,
    "process_step": "CMP"
  },
  {
    "wafer_id": 39,
    "temperature_c": 430.0772093,
    "pressure_torr": 808.7165498,
    "gas_flow_sccm": 126.1855636,
    "etch_rate_nm_min": 85.94795759,
    "voltage_v": 5.486851968,
    "current_ma": 21.77610571,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 40,
    "temperature_c": 452.9529185,
    "pressure_torr": 771.4950457,
    "gas_flow_sccm": 139.8567641,
    "etch_rate_nm_min": 95.12627819,
    "voltage_v": 4.391117878,
    "current_ma": 18.88585961,
    "process_step": "Etching"
  },
  {
    "wafer_id": 41,
    "temperature_c": 461.0769987,
    "pressure_torr": 774.9728745,
    "gas_flow_sccm": 121.235292,
    "etch_rate_nm_min": 91.7643017,
    "voltage_v": 4.860489896,
    "current_ma": 20.80097105,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 42,
    "temperature_c": 452.5705242,
    "pressure_torr": 709.2318751,
    "gas_flow_sccm": 117.8326821,
    "etch_rate_nm_min": 84.49669619,
    "voltage_v": 4.971274743,
    "current_ma": 18.79388034,
    "process_step": "CMP"
  },
  {
    "wafer_id": 43,
    "temperature_c": 448.2652758,
    "pressure_torr": 754.888427,
    "gas_flow_sccm": 117.4077819,
    "etch_rate_nm_min": 81.44768575,
    "voltage_v": 3.931117046,
    "current_ma": 21.27773339,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 44,
    "temperature_c": 445.4834446,
    "pressure_torr": 735.6152923,
    "gas_flow_sccm": 121.2438477,
    "etch_rate_nm_min": 88.22624538,
    "voltage_v": 4.565618907,
    "current_ma": 19.2964984,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 45,
    "temperature_c": 427.8221701,
    "pressure_torr": 784.8417644,
    "gas_flow_sccm": 111.7170624,
    "etch_rate_nm_min": 96.55047207,
    "voltage_v": 4.674560298,
    "current_ma": 17.53623151,
    "process_step": "Etching"
  },
  {
    "wafer_id": 46,
    "temperature_c": 439.2023369,
    "pressure_torr": 792.132415,
    "gas_flow_sccm": 121.2019856,
    "etch_rate_nm_min": 94.94879398,
    "voltage_v": 5.379282398,
    "current_ma": 19.46209386,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 47,
    "temperature_c": 443.0904184,
    "pressure_torr": 697.7654095,
    "gas_flow_sccm": 124.5081234,
    "etch_rate_nm_min": 90.99009634,
    "voltage_v": 4.717262661,
    "current_ma": 23.66800084,
    "process_step": "CMP"
  },
  {
    "wafer_id": 48,
    "temperature_c": 465.8568334,
    "pressure_torr": 759.3389541,
    "gas_flow_sccm": 122.0968606,
    "etch_rate_nm_min": 96.61509755,
    "voltage_v": 4.672768405,
    "current_ma": 23.57976863,
    "process_step": "Etching"
  },
  {
    "wafer_id": 49,
    "temperature_c": 455.1542743,
    "pressure_torr": 793.6558451,
    "gas_flow_sccm": 124.5754193,
    "etch_rate_nm_min": 103.3202138,
    "voltage_v": 5.326994312,
    "current_ma": 20.97306661,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 50,
    "temperature_c": 423.5543977,
    "pressure_torr": 754.3996311,
    "gas_flow_sccm": 124.3374761,
    "etch_rate_nm_min": 98.15301208,
    "voltage_v": 4.352835742,
    "current_ma": 19.72588237,
    "process_step": "Etching"
  },
  {
    "wafer_id": 51,
    "temperature_c": 454.8612595,
    "pressure_torr": 781.8719094,
    "gas_flow_sccm": 102.2810332,
    "etch_rate_nm_min": 94.02953063,
    "voltage_v": 4.171502373,
    "current_ma": 20.6078036,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 52,
    "temperature_c": 444.2237658,
    "pressure_torr": 770.534964,
    "gas_flow_sccm": 126.3687016,
    "etch_rate_nm_min": 102.4245761,
    "voltage_v": 4.85536308,
    "current_ma": 20.63370468,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 53,
    "temperature_c": 439.84617,
    "pressure_torr": 770.249807,
    "gas_flow_sccm": 113.2898515,
    "etch_rate_nm_min": 87.32119758,
    "voltage_v": 4.420917293,
    "current_ma": 19.9202265,
    "process_step": "CMP"
  },
  {
    "wafer_id": 54,
    "temperature_c": 459.1751443,
    "pressure_torr": 751.8605507,
    "gas_flow_sccm": 109.0416084,
    "etch_rate_nm_min": 93.20064368,
    "voltage_v": 4.436128282,
    "current_ma": 20.88188804,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 55,
    "temperature_c": 465.4649928,
    "pressure_torr": 723.5025759,
    "gas_flow_sccm": 108.9554817,
    "etch_rate_nm_min": 93.39129652,
    "voltage_v": 5.229373517,
    "current_ma": 20.41645372,
    "process_step": "Etching"
  },
  {
    "wafer_id": 56,
    "temperature_c": 463.9692018,
    "pressure_torr": 726.3540956,
    "gas_flow_sccm": 124.3354161,
    "etch_rate_nm_min": 85.10437393,
    "voltage_v": 5.350389535,
    "current_ma": 19.36805523,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 57,
    "temperature_c": 437.4117372,
    "pressure_torr": 781.2805754,
    "gas_flow_sccm": 117.7742507,
    "etch_rate_nm_min": 91.6410067,
    "voltage_v": 5.315545686,
    "current_ma": 17.6094864,
    "process_step": "CMP"
  },
  {
    "wafer_id": 58,
    "temperature_c": 445.3618144,
    "pressure_torr": 760.5837477,
    "gas_flow_sccm": 103.1803122,
    "etch_rate_nm_min": 78.40032255,
    "voltage_v": 5.443510664,
    "current_ma": 19.07988152,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 59,
    "temperature_c": 454.9689515,
    "pressure_torr": 755.8446327,
    "gas_flow_sccm": 124.7803782,
    "etch_rate_nm_min": 110.2974244,
    "voltage_v": 5.496453728,
    "current_ma": 21.5990377,
    "process_step": "Etching"
  },
  {
    "wafer_id": 60,
    "temperature_c": 464.6331769,
    "pressure_torr": 747.2832987,
    "gas_flow_sccm": 105.6039187,
    "etch_rate_nm_min": 87.50068969,
    "voltage_v": 4.148563916,
    "current_ma": 19.93707555,
    "process_step": "CMP"
  },
  {
    "wafer_id": 61,
    "temperature_c": 442.8123864,
    "pressure_torr": 750.8443346,
    "gas_flow_sccm": 121.3982136,
    "etch_rate_nm_min": 107.6889131,
    "voltage_v": 5.180164784,
    "current_ma": 20.60057378,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 62,
    "temperature_c": 447.2151154,
    "pressure_torr": 791.4073538,
    "gas_flow_sccm": 122.3849893,
    "etch_rate_nm_min": 95.30467605,
    "voltage_v": 4.78815672,
    "current_ma": 19.43396894,
    "process_step": "Etching"
  },
  {
    "wafer_id": 63,
    "temperature_c": 433.4049754,
    "pressure_torr": 749.9426775,
    "gas_flow_sccm": 128.8557708,
    "etch_rate_nm_min": 99.51891306,
    "voltage_v": 4.701030302,
    "current_ma": 17.88080499,
    "process_step": "Etching"
  },
  {
    "wafer_id": 64,
    "temperature_c": 432.0569006,
    "pressure_torr": 719.7680586,
    "gas_flow_sccm": 137.8168479,
    "etch_rate_nm_min": 91.08960161,
    "voltage_v": 5.224165853,
    "current_ma": 19.52274057,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 65,
    "temperature_c": 462.1878873,
    "pressure_torr": 782.3095533,
    "gas_flow_sccm": 106.3532367,
    "etch_rate_nm_min": 96.66343754,
    "voltage_v": 4.307881808,
    "current_ma": 17.9550882,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 66,
    "temperature_c": 470.3436004,
    "pressure_torr": 753.8537001,
    "gas_flow_sccm": 119.4752614,
    "etch_rate_nm_min": 100.2039171,
    "voltage_v": 4.299556558,
    "current_ma": 17.82742165,
    "process_step": "Etching"
  },
  {
    "wafer_id": 67,
    "temperature_c": 448.9198482,
    "pressure_torr": 760.941876,
    "gas_flow_sccm": 117.236647,
    "etch_rate_nm_min": 100.3164193,
    "voltage_v": 5.253429098,
    "current_ma": 22.41127322,
    "process_step": "CMP"
  },
  {
    "wafer_id": 68,
    "temperature_c": 465.0529935,
    "pressure_torr": 808.2273492,
    "gas_flow_sccm": 124.3374969,
    "etch_rate_nm_min": 101.1981871,
    "voltage_v": 5.195114407,
    "current_ma": 19.15982799,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 69,
    "temperature_c": 455.4245404,
    "pressure_torr": 759.3831833,
    "gas_flow_sccm": 122.1566877,
    "etch_rate_nm_min": 92.05333832,
    "voltage_v": 5.054693062,
    "current_ma": 18.51703055,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 70,
    "temperature_c": 440.3232037,
    "pressure_torr": 768.6755102,
    "gas_flow_sccm": 116.4745376,
    "etch_rate_nm_min": 91.15712262,
    "voltage_v": 4.648034638,
    "current_ma": 23.23591937,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 71,
    "temperature_c": 455.4209341,
    "pressure_torr": 724.6322953,
    "gas_flow_sccm": 115.5909781,
    "etch_rate_nm_min": 82.2465894,
    "voltage_v": 5.297531854,
    "current_ma": 21.62997007,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 72,
    "temperature_c": 473.0705485,
    "pressure_torr": 753.4099164,
    "gas_flow_sccm": 108.8354914,
    "etch_rate_nm_min": 99.18575209,
    "voltage_v": 5.272121157,
    "current_ma": 19.25698155,
    "process_step": "Etching"
  },
  {
    "wafer_id": 73,
    "temperature_c": 449.4626094,
    "pressure_torr": 778.2857814,
    "gas_flow_sccm": 129.8786158,
    "etch_rate_nm_min": 103.6590297,
    "voltage_v": 5.034121806,
    "current_ma": 20.85527265,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 74,
    "temperature_c": 473.4696548,
    "pressure_torr": 713.338788,
    "gas_flow_sccm": 124.5920418,
    "etch_rate_nm_min": 107.9278534,
    "voltage_v": 4.529071583,
    "current_ma": 19.52842336,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 75,
    "temperature_c": 410.7038234,
    "pressure_torr": 766.0253528,
    "gas_flow_sccm": 129.177682,
    "etch_rate_nm_min": 97.44138108,
    "voltage_v": 4.829900662,
    "current_ma": 18.61464064,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 76,
    "temperature_c": 462.3285376,
    "pressure_torr": 763.0237322,
    "gas_flow_sccm": 116.8960386,
    "etch_rate_nm_min": 88.86816182,
    "voltage_v": 5.335133471,
    "current_ma": 20.94938245,
    "process_step": "Etching"
  },
  {
    "wafer_id": 77,
    "temperature_c": 451.305706,
    "pressure_torr": 761.2386237,
    "gas_flow_sccm": 113.4316453,
    "etch_rate_nm_min": 81.42323085,
    "voltage_v": 5.530876489,
    "current_ma": 19.35139623,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 78,
    "temperature_c": 445.5148897,
    "pressure_torr": 791.114767,
    "gas_flow_sccm": 109.2168493,
    "etch_rate_nm_min": 103.3333339,
    "voltage_v": 4.869385359,
    "current_ma": 20.15099602,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 79,
    "temperature_c": 451.3764116,
    "pressure_torr": 770.0331554,
    "gas_flow_sccm": 123.5891758,
    "etch_rate_nm_min": 80.62978747,
    "voltage_v": 4.900130813,
    "current_ma": 22.04272647,
    "process_step": "CMP"
  },
  {
    "wafer_id": 80,
    "temperature_c": 420.1864663,
    "pressure_torr": 804.342157,
    "gas_flow_sccm": 109.6020678,
    "etch_rate_nm_min": 92.27516738,
    "voltage_v": 4.935324357,
    "current_ma": 21.82242621,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 81,
    "temperature_c": 446.7049217,
    "pressure_torr": 730.1923145,
    "gas_flow_sccm": 138.4866307,
    "etch_rate_nm_min": 93.20554538,
    "voltage_v": 5.109957204,
    "current_ma": 18.89981342,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 82,
    "temperature_c": 455.3566886,
    "pressure_torr": 764.077737,
    "gas_flow_sccm": 106.9235742,
    "etch_rate_nm_min": 94.4443589,
    "voltage_v": 4.76757308,
    "current_ma": 20.9720632,
    "process_step": "Etching"
  },
  {
    "wafer_id": 83,
    "temperature_c": 472.1684107,
    "pressure_torr": 762.5340036,
    "gas_flow_sccm": 122.7366012,
    "etch_rate_nm_min": 95.2864208,
    "voltage_v": 3.842325977,
    "current_ma": 17.74428751,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 84,
    "temperature_c": 442.2259467,
    "pressure_torr": 727.9223652,
    "gas_flow_sccm": 135.6685471,
    "etch_rate_nm_min": 96.10518045,
    "voltage_v": 5.477107601,
    "current_ma": 20.90082832,
    "process_step": "Etching"
  },
  {
    "wafer_id": 85,
    "temperature_c": 437.872596,
    "pressure_torr": 788.6888501,
    "gas_flow_sccm": 125.9908976,
    "etch_rate_nm_min": 75.6770939,
    "voltage_v": 5.717875579,
    "current_ma": 20.29699061,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 86,
    "temperature_c": 442.4736443,
    "pressure_torr": 829.7401992,
    "gas_flow_sccm": 121.7567371,
    "etch_rate_nm_min": 95.11724728,
    "voltage_v": 4.755040056,
    "current_ma": 20.75795872,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 87,
    "temperature_c": 463.7310318,
    "pressure_torr": 759.4898178,
    "gas_flow_sccm": 110.3151635,
    "etch_rate_nm_min": 77.16339541,
    "voltage_v": 4.573338652,
    "current_ma": 19.40511049,
    "process_step": "Etching"
  },
  {
    "wafer_id": 88,
    "temperature_c": 454.9312666,
    "pressure_torr": 775.1506326,
    "gas_flow_sccm": 106.1823081,
    "etch_rate_nm_min": 100.8577446,
    "voltage_v": 4.945159791,
    "current_ma": 24.16814255,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 89,
    "temperature_c": 442.0535969,
    "pressure_torr": 762.5355543,
    "gas_flow_sccm": 127.7005011,
    "etch_rate_nm_min": 90.55899875,
    "voltage_v": 4.924998447,
    "current_ma": 18.19740058,
    "process_step": "Etching"
  },
  {
    "wafer_id": 90,
    "temperature_c": 457.6990115,
    "pressure_torr": 738.5924599,
    "gas_flow_sccm": 135.0614724,
    "etch_rate_nm_min": 77.7437062,
    "voltage_v": 5.398207431,
    "current_ma": 21.94310342,
    "process_step": "Etching"
  },
  {
    "wafer_id": 91,
    "temperature_c": 451.4561632,
    "pressure_torr": 705.3771917,
    "gas_flow_sccm": 115.6115001,
    "etch_rate_nm_min": 88.48636258,
    "voltage_v": 5.021855777,
    "current_ma": 17.93660336,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 92,
    "temperature_c": 464.5296749,
    "pressure_torr": 738.8267955,
    "gas_flow_sccm": 108.6093849,
    "etch_rate_nm_min": 90.43939729,
    "voltage_v": 4.682950868,
    "current_ma": 21.00868835,
    "process_step": "Etching"
  },
  {
    "wafer_id": 93,
    "temperature_c": 439.4692036,
    "pressure_torr": 718.2412486,
    "gas_flow_sccm": 95.41830569,
    "etch_rate_nm_min": 104.5255969,
    "voltage_v": 4.47263622,
    "current_ma": 21.15157995,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 94,
    "temperature_c": 445.0850678,
    "pressure_torr": 811.1230623,
    "gas_flow_sccm": 110.1923516,
    "etch_rate_nm_min": 96.57310193,
    "voltage_v": 5.346253674,
    "current_ma": 20.10995174,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 95,
    "temperature_c": 444.1183777,
    "pressure_torr": 756.5467092,
    "gas_flow_sccm": 118.8634316,
    "etch_rate_nm_min": 97.75555955,
    "voltage_v": 5.239804496,
    "current_ma": 19.00935118,
    "process_step": "Etching"
  },
  {
    "wafer_id": 96,
    "temperature_c": 428.0472758,
    "pressure_torr": 749.6224201,
    "gas_flow_sccm": 135.9912324,
    "etch_rate_nm_min": 104.4497731,
    "voltage_v": 5.424223951,
    "current_ma": 20.28226978,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 97,
    "temperature_c": 454.4418042,
    "pressure_torr": 786.6746147,
    "gas_flow_sccm": 126.7313369,
    "etch_rate_nm_min": 94.2308457,
    "voltage_v": 4.6127253,
    "current_ma": 20.53402067,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 98,
    "temperature_c": 453.9158291,
    "pressure_torr": 726.3474669,
    "gas_flow_sccm": 123.050854,
    "etch_rate_nm_min": 101.0335037,
    "voltage_v": 5.73537476,
    "current_ma": 23.57987297,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 99,
    "temperature_c": 450.0767018,
    "pressure_torr": 736.9940789,
    "gas_flow_sccm": 115.9988034,
    "etch_rate_nm_min": 100.4708889,
    "voltage_v": 4.302522197,
    "current_ma": 18.25531943,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 100,
    "temperature_c": 446.481193,
    "pressure_torr": 762.0421681,
    "gas_flow_sccm": 114.1683428,
    "etch_rate_nm_min": 84.70824405,
    "voltage_v": 5.283840409,
    "current_ma": 18.88817301,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 101,
    "temperature_c": 428.7694389,
    "pressure_torr": 790.8630697,
    "gas_flow_sccm": 134.056476,
    "etch_rate_nm_min": 106.7838686,
    "voltage_v": 4.236166893,
    "current_ma": 20.56947111,
    "process_step": "Etching"
  },
  {
    "wafer_id": 102,
    "temperature_c": 443.6903202,
    "pressure_torr": 775.0505514,
    "gas_flow_sccm": 122.0073854,
    "etch_rate_nm_min": 83.63758576,
    "voltage_v": 4.683867447,
    "current_ma": 19.48789242,
    "process_step": "CMP"
  },
  {
    "wafer_id": 103,
    "temperature_c": 444.8592823,
    "pressure_torr": 767.4497543,
    "gas_flow_sccm": 98.97399308,
    "etch_rate_nm_min": 102.3389332,
    "voltage_v": 5.624409172,
    "current_ma": 19.79991792,
    "process_step": "Etching"
  },
  {
    "wafer_id": 104,
    "temperature_c": 437.965841,
    "pressure_torr": 762.3435321,
    "gas_flow_sccm": 113.2646035,
    "etch_rate_nm_min": 82.8634157,
    "voltage_v": 5.332545702,
    "current_ma": 22.14070367,
    "process_step": "Etching"
  },
  {
    "wafer_id": 105,
    "temperature_c": 447.5807143,
    "pressure_torr": 772.0070757,
    "gas_flow_sccm": 111.4178397,
    "etch_rate_nm_min": 99.80989431,
    "voltage_v": 4.781511834,
    "current_ma": 14.35946699,
    "process_step": "CMP"
  },
  {
    "wafer_id": 106,
    "temperature_c": 456.0607629,
    "pressure_torr": 766.0495872,
    "gas_flow_sccm": 114.5373599,
    "etch_rate_nm_min": 109.895319,
    "voltage_v": 4.792465183,
    "current_ma": 18.80410131,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 107,
    "temperature_c": 478.2927885,
    "pressure_torr": 729.1008318,
    "gas_flow_sccm": 125.6291066,
    "etch_rate_nm_min": 93.29617075,
    "voltage_v": 5.040248844,
    "current_ma": 16.51526155,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 108,
    "temperature_c": 452.6186672,
    "pressure_torr": 761.3823766,
    "gas_flow_sccm": 118.9255512,
    "etch_rate_nm_min": 92.94915486,
    "voltage_v": 5.205656396,
    "current_ma": 17.60836713,
    "process_step": "Etching"
  },
  {
    "wafer_id": 109,
    "temperature_c": 453.8632559,
    "pressure_torr": 727.7893402,
    "gas_flow_sccm": 119.2313459,
    "etch_rate_nm_min": 99.88351999,
    "voltage_v": 5.500631753,
    "current_ma": 24.80924898,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 110,
    "temperature_c": 448.8833113,
    "pressure_torr": 762.4324763,
    "gas_flow_sccm": 133.1347316,
    "etch_rate_nm_min": 92.36482835,
    "voltage_v": 4.817506398,
    "current_ma": 21.19633627,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 111,
    "temperature_c": 421.2184318,
    "pressure_torr": 745.5805618,
    "gas_flow_sccm": 113.0353891,
    "etch_rate_nm_min": 109.5462296,
    "voltage_v": 4.355285975,
    "current_ma": 21.90312985,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 112,
    "temperature_c": 449.6022919,
    "pressure_torr": 836.1814487,
    "gas_flow_sccm": 138.6419953,
    "etch_rate_nm_min": 96.537538,
    "voltage_v": 5.062787451,
    "current_ma": 19.8389407,
    "process_step": "CMP"
  },
  {
    "wafer_id": 113,
    "temperature_c": 450.9034531,
    "pressure_torr": 758.8031685,
    "gas_flow_sccm": 113.2869241,
    "etch_rate_nm_min": 92.43864393,
    "voltage_v": 4.817027665,
    "current_ma": 21.51742765,
    "process_step": "Etching"
  },
  {
    "wafer_id": 114,
    "temperature_c": 486.9486317,
    "pressure_torr": 717.872813,
    "gas_flow_sccm": 120.891982,
    "etch_rate_nm_min": 90.67771578,
    "voltage_v": 4.479746518,
    "current_ma": 16.46687098,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 115,
    "temperature_c": 447.1145855,
    "pressure_torr": 755.9745937,
    "gas_flow_sccm": 117.187964,
    "etch_rate_nm_min": 87.53641224,
    "voltage_v": 5.119067566,
    "current_ma": 22.07659682,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 116,
    "temperature_c": 454.5232101,
    "pressure_torr": 775.5807624,
    "gas_flow_sccm": 121.2341913,
    "etch_rate_nm_min": 89.97796011,
    "voltage_v": 4.914754498,
    "current_ma": 18.36031176,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 117,
    "temperature_c": 449.4793235,
    "pressure_torr": 810.2009184,
    "gas_flow_sccm": 124.44592,
    "etch_rate_nm_min": 92.19461285,
    "voltage_v": 5.122604883,
    "current_ma": 18.93736836,
    "process_step": "Etching"
  },
  {
    "wafer_id": 118,
    "temperature_c": 432.4698294,
    "pressure_torr": 742.316428,
    "gas_flow_sccm": 124.3383524,
    "etch_rate_nm_min": 91.09888741,
    "voltage_v": 4.64222232,
    "current_ma": 21.01030214,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 119,
    "temperature_c": 467.1423422,
    "pressure_torr": 712.5271608,
    "gas_flow_sccm": 112.4688267,
    "etch_rate_nm_min": 89.73459781,
    "voltage_v": 5.194684212,
    "current_ma": 20.63289352,
    "process_step": "CMP"
  },
  {
    "wafer_id": 120,
    "temperature_c": 461.2789955,
    "pressure_torr": 784.5051103,
    "gas_flow_sccm": 108.7708532,
    "etch_rate_nm_min": 111.7907298,
    "voltage_v": 4.473160721,
    "current_ma": 20.1692401,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 121,
    "temperature_c": 461.8654792,
    "pressure_torr": 718.5820388,
    "gas_flow_sccm": 145.0317179,
    "etch_rate_nm_min": 86.75923939,
    "voltage_v": 4.668907444,
    "current_ma": 17.27380769,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 122,
    "temperature_c": 436.3591882,
    "pressure_torr": 746.9153368,
    "gas_flow_sccm": 115.1601566,
    "etch_rate_nm_min": 96.1730607,
    "voltage_v": 4.902834308,
    "current_ma": 20.19962734,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 123,
    "temperature_c": 471.0419147,
    "pressure_torr": 752.2713854,
    "gas_flow_sccm": 126.9921244,
    "etch_rate_nm_min": 99.74016808,
    "voltage_v": 5.696727366,
    "current_ma": 21.92112271,
    "process_step": "Etching"
  },
  {
    "wafer_id": 124,
    "temperature_c": 428.9722341,
    "pressure_torr": 757.9109964,
    "gas_flow_sccm": 103.9235869,
    "etch_rate_nm_min": 100.040864,
    "voltage_v": 5.313930147,
    "current_ma": 18.93502581,
    "process_step": "CMP"
  },
  {
    "wafer_id": 125,
    "temperature_c": 458.8028564,
    "pressure_torr": 780.6749337,
    "gas_flow_sccm": 117.2038728,
    "etch_rate_nm_min": 94.53114339,
    "voltage_v": 5.430877002,
    "current_ma": 22.62987409,
    "process_step": "CMP"
  },
  {
    "wafer_id": 126,
    "temperature_c": 482.8568344,
    "pressure_torr": 739.4909715,
    "gas_flow_sccm": 118.7280062,
    "etch_rate_nm_min": 93.07437943,
    "voltage_v": 5.566830813,
    "current_ma": 18.25461613,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 127,
    "temperature_c": 435.1419551,
    "pressure_torr": 751.7881224,
    "gas_flow_sccm": 124.7281507,
    "etch_rate_nm_min": 98.61237993,
    "voltage_v": 6.441132854,
    "current_ma": 20.01309578,
    "process_step": "Etching"
  },
  {
    "wafer_id": 128,
    "temperature_c": 441.5055341,
    "pressure_torr": 759.5718894,
    "gas_flow_sccm": 92.77545859,
    "etch_rate_nm_min": 97.1321732,
    "voltage_v": 5.016635627,
    "current_ma": 23.07065547,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 129,
    "temperature_c": 451.4947705,
    "pressure_torr": 764.4879387,
    "gas_flow_sccm": 121.6614061,
    "etch_rate_nm_min": 92.92832932,
    "voltage_v": 5.568160369,
    "current_ma": 18.63720017,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 130,
    "temperature_c": 442.4478652,
    "pressure_torr": 762.9348152,
    "gas_flow_sccm": 108.5025854,
    "etch_rate_nm_min": 82.50497143,
    "voltage_v": 5.405054102,
    "current_ma": 22.10797097,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 131,
    "temperature_c": 426.7400485,
    "pressure_torr": 773.0801733,
    "gas_flow_sccm": 123.2434571,
    "etch_rate_nm_min": 91.25661022,
    "voltage_v": 5.398413001,
    "current_ma": 23.94930472,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 132,
    "temperature_c": 451.0284446,
    "pressure_torr": 785.3151853,
    "gas_flow_sccm": 109.636708,
    "etch_rate_nm_min": 85.82759869,
    "voltage_v": 5.709695847,
    "current_ma": 20.34208814,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 133,
    "temperature_c": 434.0654443,
    "pressure_torr": 771.7790235,
    "gas_flow_sccm": 111.445173,
    "etch_rate_nm_min": 89.6627236,
    "voltage_v": 4.832274788,
    "current_ma": 18.94596603,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 134,
    "temperature_c": 457.1038865,
    "pressure_torr": 773.6075657,
    "gas_flow_sccm": 117.2637239,
    "etch_rate_nm_min": 95.26578591,
    "voltage_v": 4.80052599,
    "current_ma": 18.45452239,
    "process_step": "Etching"
  },
  {
    "wafer_id": 135,
    "temperature_c": 436.2086365,
    "pressure_torr": 712.533305,
    "gas_flow_sccm": 109.4767053,
    "etch_rate_nm_min": 97.86988915,
    "voltage_v": 5.127906205,
    "current_ma": 22.60920541,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 136,
    "temperature_c": 473.2490161,
    "pressure_torr": 761.506831,
    "gas_flow_sccm": 115.2446555,
    "etch_rate_nm_min": 109.243622,
    "voltage_v": 4.926920091,
    "current_ma": 22.5533884,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 137,
    "temperature_c": 438.2512006,
    "pressure_torr": 774.3852264,
    "gas_flow_sccm": 108.0662423,
    "etch_rate_nm_min": 90.70074897,
    "voltage_v": 5.127400341,
    "current_ma": 22.89861825,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 138,
    "temperature_c": 445.1690773,
    "pressure_torr": 781.8682358,
    "gas_flow_sccm": 101.6682955,
    "etch_rate_nm_min": 101.1970051,
    "voltage_v": 5.625099514,
    "current_ma": 19.9343233,
    "process_step": "CMP"
  },
  {
    "wafer_id": 139,
    "temperature_c": 462.2027583,
    "pressure_torr": 739.2294768,
    "gas_flow_sccm": 130.1795705,
    "etch_rate_nm_min": 97.4476802,
    "voltage_v": 4.808741311,
    "current_ma": 22.07561388,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 140,
    "temperature_c": 431.5370353,
    "pressure_torr": 740.2288218,
    "gas_flow_sccm": 107.0395131,
    "etch_rate_nm_min": 105.3679814,
    "voltage_v": 4.878128415,
    "current_ma": 19.90232122,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 141,
    "temperature_c": 453.411899,
    "pressure_torr": 742.7769797,
    "gas_flow_sccm": 118.2131911,
    "etch_rate_nm_min": 99.60982976,
    "voltage_v": 5.069724401,
    "current_ma": 18.23388976,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 142,
    "temperature_c": 469.6071413,
    "pressure_torr": 776.092417,
    "gas_flow_sccm": 127.5289108,
    "etch_rate_nm_min": 86.93214858,
    "voltage_v": 4.90867263,
    "current_ma": 22.24835357,
    "process_step": "Etching"
  },
  {
    "wafer_id": 143,
    "temperature_c": 425.8877515,
    "pressure_torr": 791.0164316,
    "gas_flow_sccm": 113.850559,
    "etch_rate_nm_min": 81.21563177,
    "voltage_v": 4.234397669,
    "current_ma": 23.26774056,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 144,
    "temperature_c": 452.7695079,
    "pressure_torr": 747.7761968,
    "gas_flow_sccm": 111.748341,
    "etch_rate_nm_min": 97.4900936,
    "voltage_v": 4.767948943,
    "current_ma": 17.95879605,
    "process_step": "CMP"
  },
  {
    "wafer_id": 145,
    "temperature_c": 453.8982419,
    "pressure_torr": 787.2388694,
    "gas_flow_sccm": 122.2623809,
    "etch_rate_nm_min": 90.77239202,
    "voltage_v": 5.274949297,
    "current_ma": 17.92113807,
    "process_step": "Etching"
  },
  {
    "wafer_id": 146,
    "temperature_c": 461.7273431,
    "pressure_torr": 763.7043943,
    "gas_flow_sccm": 131.1793382,
    "etch_rate_nm_min": 87.15749003,
    "voltage_v": 5.5750187,
    "current_ma": 20.07996387,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 147,
    "temperature_c": 431.4457393,
    "pressure_torr": 756.2714267,
    "gas_flow_sccm": 108.3068473,
    "etch_rate_nm_min": 84.85937836,
    "voltage_v": 4.538152573,
    "current_ma": 21.91225721,
    "process_step": "Etching"
  },
  {
    "wafer_id": 148,
    "temperature_c": 430.1931508,
    "pressure_torr": 753.6584731,
    "gas_flow_sccm": 118.4985217,
    "etch_rate_nm_min": 96.28780398,
    "voltage_v": 4.53628704,
    "current_ma": 17.73236161,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 149,
    "temperature_c": 457.8291235,
    "pressure_torr": 782.3983409,
    "gas_flow_sccm": 102.6750541,
    "etch_rate_nm_min": 107.0616616,
    "voltage_v": 5.012093521,
    "current_ma": 20.45403147,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 150,
    "temperature_c": 454.4547701,
    "pressure_torr": 769.7673345,
    "gas_flow_sccm": 116.06799,
    "etch_rate_nm_min": 91.73062123,
    "voltage_v": 4.169761974,
    "current_ma": 18.81914609,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 151,
    "temperature_c": 453.7573928,
    "pressure_torr": 828.2747628,
    "gas_flow_sccm": 120.3420468,
    "etch_rate_nm_min": 99.72216249,
    "voltage_v": 4.822011919,
    "current_ma": 21.4016582,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 152,
    "temperature_c": 455.1967231,
    "pressure_torr": 734.4332607,
    "gas_flow_sccm": 111.4537536,
    "etch_rate_nm_min": 94.1818692,
    "voltage_v": 4.305583176,
    "current_ma": 18.40422636,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 153,
    "temperature_c": 439.7996292,
    "pressure_torr": 775.5430511,
    "gas_flow_sccm": 115.4300817,
    "etch_rate_nm_min": 84.68494329,
    "voltage_v": 5.54762452,
    "current_ma": 21.543606,
    "process_step": "Etching"
  },
  {
    "wafer_id": 154,
    "temperature_c": 453.4838055,
    "pressure_torr": 744.1239697,
    "gas_flow_sccm": 105.9177323,
    "etch_rate_nm_min": 100.8784907,
    "voltage_v": 4.692267538,
    "current_ma": 19.68357038,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 155,
    "temperature_c": 454.3960871,
    "pressure_torr": 733.9213904,
    "gas_flow_sccm": 120.7707861,
    "etch_rate_nm_min": 86.24246365,
    "voltage_v": 5.661133675,
    "current_ma": 18.12571895,
    "process_step": "Etching"
  },
  {
    "wafer_id": 156,
    "temperature_c": 439.2847287,
    "pressure_torr": 759.6739859,
    "gas_flow_sccm": 130.5569425,
    "etch_rate_nm_min": 95.17301304,
    "voltage_v": 5.445408541,
    "current_ma": 20.12737991,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 157,
    "temperature_c": 477.9866177,
    "pressure_torr": 764.1205744,
    "gas_flow_sccm": 109.0285613,
    "etch_rate_nm_min": 92.26783668,
    "voltage_v": 4.741473081,
    "current_ma": 16.12405337,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 158,
    "temperature_c": 457.1074938,
    "pressure_torr": 847.5452067,
    "gas_flow_sccm": 113.7732823,
    "etch_rate_nm_min": 102.1446195,
    "voltage_v": 4.571216145,
    "current_ma": 18.88181086,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 159,
    "temperature_c": 432.1304475,
    "pressure_torr": 754.4756255,
    "gas_flow_sccm": 125.0254625,
    "etch_rate_nm_min": 86.53479206,
    "voltage_v": 4.9225817,
    "current_ma": 20.67480214,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 160,
    "temperature_c": 459.8483041,
    "pressure_torr": 726.0946381,
    "gas_flow_sccm": 132.1209072,
    "etch_rate_nm_min": 98.12695926,
    "voltage_v": 4.95814135,
    "current_ma": 16.45649044,
    "process_step": "CMP"
  },
  {
    "wafer_id": 161,
    "temperature_c": 435.3797749,
    "pressure_torr": 768.1903215,
    "gas_flow_sccm": 105.0681019,
    "etch_rate_nm_min": 88.28162074,
    "voltage_v": 5.138458778,
    "current_ma": 14.85772629,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 162,
    "temperature_c": 461.8062691,
    "pressure_torr": 697.7607989,
    "gas_flow_sccm": 118.3121526,
    "etch_rate_nm_min": 90.9111583,
    "voltage_v": 4.689382684,
    "current_ma": 15.32126536,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 163,
    "temperature_c": 467.3789337,
    "pressure_torr": 757.2412965,
    "gas_flow_sccm": 122.8313082,
    "etch_rate_nm_min": 65.91839818,
    "voltage_v": 5.298557949,
    "current_ma": 22.65425711,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 164,
    "temperature_c": 437.6897652,
    "pressure_torr": 760.4807585,
    "gas_flow_sccm": 118.9794361,
    "etch_rate_nm_min": 111.7367886,
    "voltage_v": 5.106131222,
    "current_ma": 19.84648197,
    "process_step": "Etching"
  },
  {
    "wafer_id": 165,
    "temperature_c": 464.4506419,
    "pressure_torr": 783.8380115,
    "gas_flow_sccm": 95.23207933,
    "etch_rate_nm_min": 99.40445546,
    "voltage_v": 4.863841937,
    "current_ma": 18.93506921,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 166,
    "temperature_c": 456.1917139,
    "pressure_torr": 789.2086675,
    "gas_flow_sccm": 125.0109001,
    "etch_rate_nm_min": 88.86122011,
    "voltage_v": 4.715183738,
    "current_ma": 21.89030947,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 167,
    "temperature_c": 462.3309024,
    "pressure_torr": 744.8929114,
    "gas_flow_sccm": 135.1933635,
    "etch_rate_nm_min": 86.00275449,
    "voltage_v": 4.926046007,
    "current_ma": 19.19110064,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 168,
    "temperature_c": 478.4518947,
    "pressure_torr": 755.4815796,
    "gas_flow_sccm": 121.1666175,
    "etch_rate_nm_min": 91.03480998,
    "voltage_v": 4.673239499,
    "current_ma": 20.5369238,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 169,
    "temperature_c": 446.3191783,
    "pressure_torr": 737.0163751,
    "gas_flow_sccm": 109.6889395,
    "etch_rate_nm_min": 100.7350363,
    "voltage_v": 5.023375478,
    "current_ma": 20.0515107,
    "process_step": "CMP"
  },
  {
    "wafer_id": 170,
    "temperature_c": 438.6939575,
    "pressure_torr": 726.1581234,
    "gas_flow_sccm": 114.8687275,
    "etch_rate_nm_min": 79.8633206,
    "voltage_v": 5.034175474,
    "current_ma": 19.05800116,
    "process_step": "Etching"
  },
  {
    "wafer_id": 171,
    "temperature_c": 436.6572836,
    "pressure_torr": 769.2968434,
    "gas_flow_sccm": 137.6991307,
    "etch_rate_nm_min": 93.86732465,
    "voltage_v": 5.104682913,
    "current_ma": 20.58829177,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 172,
    "temperature_c": 437.7628457,
    "pressure_torr": 721.7924335,
    "gas_flow_sccm": 129.0996254,
    "etch_rate_nm_min": 109.165135,
    "voltage_v": 5.706496964,
    "current_ma": 21.54652244,
    "process_step": "CMP"
  },
  {
    "wafer_id": 173,
    "temperature_c": 448.8434744,
    "pressure_torr": 747.561193,
    "gas_flow_sccm": 126.4002662,
    "etch_rate_nm_min": 85.92842931,
    "voltage_v": 4.947022112,
    "current_ma": 19.63018677,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 174,
    "temperature_c": 455.1172796,
    "pressure_torr": 730.1447812,
    "gas_flow_sccm": 123.5641258,
    "etch_rate_nm_min": 95.64308031,
    "voltage_v": 5.401839147,
    "current_ma": 19.07888885,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 175,
    "temperature_c": 454.150362,
    "pressure_torr": 776.4904956,
    "gas_flow_sccm": 113.3886289,
    "etch_rate_nm_min": 112.6264785,
    "voltage_v": 5.091834959,
    "current_ma": 19.31497518,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 176,
    "temperature_c": 462.4077487,
    "pressure_torr": 814.042903,
    "gas_flow_sccm": 117.9942882,
    "etch_rate_nm_min": 100.057213,
    "voltage_v": 4.904702279,
    "current_ma": 15.40417493,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 177,
    "temperature_c": 450.1950284,
    "pressure_torr": 720.9523605,
    "gas_flow_sccm": 119.2207726,
    "etch_rate_nm_min": 96.00739056,
    "voltage_v": 4.952336292,
    "current_ma": 20.56611909,
    "process_step": "Etching"
  },
  {
    "wafer_id": 178,
    "temperature_c": 471.8030112,
    "pressure_torr": 704.4094455,
    "gas_flow_sccm": 125.4957432,
    "etch_rate_nm_min": 99.05309164,
    "voltage_v": 4.976469436,
    "current_ma": 17.58177742,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 179,
    "temperature_c": 446.0301475,
    "pressure_torr": 756.2533934,
    "gas_flow_sccm": 135.0891889,
    "etch_rate_nm_min": 91.79307732,
    "voltage_v": 5.111907083,
    "current_ma": 21.25943745,
    "process_step": "Etching"
  },
  {
    "wafer_id": 180,
    "temperature_c": 490.8025375,
    "pressure_torr": 760.4709339,
    "gas_flow_sccm": 131.1833814,
    "etch_rate_nm_min": 105.3970503,
    "voltage_v": 4.616271694,
    "current_ma": 19.8191518,
    "process_step": "Etching"
  },
  {
    "wafer_id": 181,
    "temperature_c": 459.3850102,
    "pressure_torr": 766.5597792,
    "gas_flow_sccm": 105.8061564,
    "etch_rate_nm_min": 91.80535982,
    "voltage_v": 4.413863847,
    "current_ma": 20.21024219,
    "process_step": "Etching"
  },
  {
    "wafer_id": 182,
    "temperature_c": 437.1426367,
    "pressure_torr": 746.6103845,
    "gas_flow_sccm": 122.2399497,
    "etch_rate_nm_min": 79.32654713,
    "voltage_v": 5.261718957,
    "current_ma": 21.40065834,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 183,
    "temperature_c": 433.9366125,
    "pressure_torr": 753.980821,
    "gas_flow_sccm": 127.3676335,
    "etch_rate_nm_min": 91.86957517,
    "voltage_v": 5.359249533,
    "current_ma": 18.14695247,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 184,
    "temperature_c": 457.2370862,
    "pressure_torr": 771.0253123,
    "gas_flow_sccm": 126.1886033,
    "etch_rate_nm_min": 87.26612376,
    "voltage_v": 5.298254333,
    "current_ma": 20.73849689,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 185,
    "temperature_c": 446.6480582,
    "pressure_torr": 791.2129268,
    "gas_flow_sccm": 113.7076624,
    "etch_rate_nm_min": 92.7504479,
    "voltage_v": 5.061988807,
    "current_ma": 20.53524211,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 186,
    "temperature_c": 460.7100074,
    "pressure_torr": 701.3485369,
    "gas_flow_sccm": 149.1410922,
    "etch_rate_nm_min": 92.92732753,
    "voltage_v": 5.306889851,
    "current_ma": 19.63043833,
    "process_step": "Etching"
  },
  {
    "wafer_id": 187,
    "temperature_c": 457.0985644,
    "pressure_torr": 748.9318168,
    "gas_flow_sccm": 107.2291544,
    "etch_rate_nm_min": 104.5793856,
    "voltage_v": 5.28537161,
    "current_ma": 18.1436276,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 188,
    "temperature_c": 448.9075663,
    "pressure_torr": 766.4142638,
    "gas_flow_sccm": 109.1681155,
    "etch_rate_nm_min": 100.5623418,
    "voltage_v": 5.315051744,
    "current_ma": 21.19047673,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 189,
    "temperature_c": 437.2980942,
    "pressure_torr": 732.4607169,
    "gas_flow_sccm": 122.3359508,
    "etch_rate_nm_min": 97.1061239,
    "voltage_v": 4.656183671,
    "current_ma": 21.40690909,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 190,
    "temperature_c": 427.2772916,
    "pressure_torr": 811.935089,
    "gas_flow_sccm": 141.1680305,
    "etch_rate_nm_min": 94.97643671,
    "voltage_v": 4.561219281,
    "current_ma": 20.22720405,
    "process_step": "CMP"
  },
  {
    "wafer_id": 191,
    "temperature_c": 443.3022757,
    "pressure_torr": 740.9377036,
    "gas_flow_sccm": 111.6380515,
    "etch_rate_nm_min": 86.52913593,
    "voltage_v": 4.844572301,
    "current_ma": 17.85939517,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 192,
    "temperature_c": 462.8459819,
    "pressure_torr": 758.7612194,
    "gas_flow_sccm": 117.3417163,
    "etch_rate_nm_min": 77.5505981,
    "voltage_v": 4.993046356,
    "current_ma": 18.94510193,
    "process_step": "Etching"
  },
  {
    "wafer_id": 193,
    "temperature_c": 453.2114062,
    "pressure_torr": 776.6806629,
    "gas_flow_sccm": 130.7729367,
    "etch_rate_nm_min": 95.90528009,
    "voltage_v": 4.903231549,
    "current_ma": 19.87933456,
    "process_step": "Etching"
  },
  {
    "wafer_id": 194,
    "temperature_c": 431.3139183,
    "pressure_torr": 742.2614563,
    "gas_flow_sccm": 119.8213785,
    "etch_rate_nm_min": 101.3571296,
    "voltage_v": 4.249323867,
    "current_ma": 21.3769891,
    "process_step": "Lithography"
  },
  {
    "wafer_id": 195,
    "temperature_c": 452.5977139,
    "pressure_torr": 704.6028086,
    "gas_flow_sccm": 116.6539615,
    "etch_rate_nm_min": 94.13332893,
    "voltage_v": 5.688677045,
    "current_ma": 16.8330212,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 196,
    "temperature_c": 455.7797607,
    "pressure_torr": 747.1403642,
    "gas_flow_sccm": 125.656329,
    "etch_rate_nm_min": 90.72116542,
    "voltage_v": 4.890381604,
    "current_ma": 18.87239307,
    "process_step": "Deposition"
  },
  {
    "wafer_id": 197,
    "temperature_c": 436.7421385,
    "pressure_torr": 790.8832167,
    "gas_flow_sccm": 122.7251799,
    "etch_rate_nm_min": 98.71601732,
    "voltage_v": 5.069081767,
    "current_ma": 19.19465488,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 198,
    "temperature_c": 452.3058766,
    "pressure_torr": 749.8931462,
    "gas_flow_sccm": 130.3043879,
    "etch_rate_nm_min": 94.3333424,
    "voltage_v": 5.497819596,
    "current_ma": 19.83355684,
    "process_step": "Oxidation"
  },
  {
    "wafer_id": 199,
    "temperature_c": 450.8731308,
    "pressure_torr": 734.606971,
    "gas_flow_sccm": 132.9146889,
    "etch_rate_nm_min": 108.4859535,
    "voltage_v": 4.062011092,
    "current_ma": 17.39734943,
    "process_step": "Oxidation"
  }
];
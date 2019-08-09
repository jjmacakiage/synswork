export const json = {
    "contractIdentifier" : [ {
        "assignedIdentifier" : [ {
            "identifier" : {
                "value" : "SW2000",
                "meta" : {
                    "scheme" : "http://www.barclays.com/swaps/trade-id"
                }
            },
            "version" : 1
        } ],
        "issuerReference" : {
            "globalReference" : "c6416b25",
            "externalReference" : "party2"
        },
        "meta" : {
            "globalKey" : "b05803d"
        }
    } ],
    "contractualProduct" : {
        "economicTerms" : {
            "payout" : {
                "interestRatePayout" : [ {
                    "calculationPeriodDates" : {
                        "calculationPeriodDatesAdjustments" : {
                            "businessCenters" : {
                                "businessCentersReference" : {
                                    "globalReference" : "3deac93",
                                    "externalReference" : "primaryBusinessCenters"
                                },
                                "meta" : {
                                    "globalKey" : "0"
                                }
                            },
                            "businessDayConvention" : "MODFOLLOWING",
                            "meta" : {
                                "globalKey" : "9125764f"
                            }
                        },
                        "calculationPeriodFrequency" : {
                            "meta" : {
                                "globalKey" : "2481db"
                            },
                            "period" : "M",
                            "periodMultiplier" : 6,
                            "rollConvention" : "14"
                        },
                        "effectiveDate" : {
                            "adjustableDate" : {
                                "dateAdjustments" : {
                                    "businessDayConvention" : "NONE",
                                    "meta" : {
                                        "globalKey" : "4703fc8"
                                    }
                                },
                                "meta" : {
                                    "globalKey" : "593369fa"
                                },
                                "unadjustedDate" : "1994-12-14"
                            },
                            "meta" : {
                                "globalKey" : "593369fa"
                            }
                        },
                        "meta" : {
                            "globalKey" : "1bc89b9c",
                            "externalKey" : "floatingCalcPeriodDates"
                        },
                        "terminationDate" : {
                            "adjustableDate" : {
                                "dateAdjustments" : {
                                    "businessCenters" : {
                                        "businessCenter" : [ {
                                            "value" : "DEFR"
                                        } ],
                                        "meta" : {
                                            "globalKey" : "3deac93",
                                            "externalKey" : "primaryBusinessCenters"
                                        }
                                    },
                                    "businessDayConvention" : "MODFOLLOWING",
                                    "meta" : {
                                        "globalKey" : "b80395e"
                                    }
                                },
                                "meta" : {
                                    "globalKey" : "c861d290"
                                },
                                "unadjustedDate" : "1999-12-14"
                            },
                            "meta" : {
                                "globalKey" : "c861d290"
                            }
                        }
                    },
                    "dayCountFraction" : {
                        "value" : "ACT/360"
                    },
                    "meta" : {
                        "globalKey" : "b90d6478"
                    },
                    "payerReceiver" : {
                        "payerPartyReference" : {
                            "globalReference" : "468059e0",
                            "externalReference" : "party1"
                        },
                        "receiverPartyReference" : {
                            "globalReference" : "c6416b25",
                            "externalReference" : "party2"
                        }
                    },
                    "paymentDates" : {
                        "meta" : {
                            "globalKey" : "4340854e"
                        },
                        "payRelativeTo" : "CALCULATION_PERIOD_END_DATE",
                        "paymentDatesAdjustments" : {
                            "businessCenters" : {
                                "businessCentersReference" : {
                                    "globalReference" : "3deac93",
                                    "externalReference" : "primaryBusinessCenters"
                                },
                                "meta" : {
                                    "globalKey" : "0"
                                }
                            },
                            "businessDayConvention" : "MODFOLLOWING",
                            "meta" : {
                                "globalKey" : "9125764f"
                            }
                        },
                        "paymentFrequency" : {
                            "meta" : {
                                "globalKey" : "121c7"
                            },
                            "period" : "M",
                            "periodMultiplier" : 6
                        }
                    },
                    "quantity" : {
                        "notionalSchedule" : {
                            "meta" : {
                                "globalKey" : "1a115b3d"
                            },
                            "notionalStepSchedule" : {
                                "initialValue" : 50000000.00,
                                "meta" : {
                                    "globalKey" : "27fa7367"
                                },
                                "currency" : {
                                    "value" : "EUR",
                                    "meta" : {
                                        "scheme" : "http://www.fpml.org/coding-scheme/external/iso4217"
                                    }
                                }
                            }
                        }
                    },
                    "rateSpecification" : {
                        "floatingRate" : {
                            "floatingRateIndex" : {
                                "value" : "EUR-LIBOR-BBA"
                            },
                            "indexTenor" : {
                                "meta" : {
                                    "globalKey" : "121c7"
                                },
                                "period" : "M",
                                "periodMultiplier" : 6
                            },
                            "meta" : {
                                "globalKey" : "2506df34"
                            }
                        }
                    },
                    "resetDates" : {
                        "calculationPeriodDatesReference" : {
                            "globalReference" : "1bc89b9c",
                            "externalReference" : "floatingCalcPeriodDates"
                        },
                        "fixingDates" : {
                            "meta" : {
                                "globalKey" : "f4ae4220"
                            },
                            "period" : "D",
                            "periodMultiplier" : -2,
                            "dayType" : "BUSINESS",
                            "businessCenters" : {
                                "businessCenter" : [ {
                                    "value" : "GBLO"
                                } ],
                                "meta" : {
                                    "globalKey" : "407ac22"
                                }
                            },
                            "businessDayConvention" : "NONE",
                            "dateRelativeTo" : {
                                "globalReference" : "e0326547",
                                "externalReference" : "resetDates"
                            }
                        },
                        "meta" : {
                            "globalKey" : "e0326547",
                            "externalKey" : "resetDates"
                        },
                        "resetDatesAdjustments" : {
                            "businessCenters" : {
                                "businessCentersReference" : {
                                    "globalReference" : "3deac93",
                                    "externalReference" : "primaryBusinessCenters"
                                },
                                "meta" : {
                                    "globalKey" : "0"
                                }
                            },
                            "businessDayConvention" : "MODFOLLOWING",
                            "meta" : {
                                "globalKey" : "9125764f"
                            }
                        },
                        "resetFrequency" : {
                            "meta" : {
                                "globalKey" : "121c7"
                            },
                            "period" : "M",
                            "periodMultiplier" : 6
                        },
                        "resetRelativeTo" : "CALCULATION_PERIOD_START_DATE"
                    }
                }, {
                    "calculationPeriodDates" : {
                        "calculationPeriodDatesAdjustments" : {
                            "businessCenters" : {
                                "businessCentersReference" : {
                                    "globalReference" : "3deac93",
                                    "externalReference" : "primaryBusinessCenters"
                                },
                                "meta" : {
                                    "globalKey" : "0"
                                }
                            },
                            "businessDayConvention" : "MODFOLLOWING",
                            "meta" : {
                                "globalKey" : "9125764f"
                            }
                        },
                        "calculationPeriodFrequency" : {
                            "meta" : {
                                "globalKey" : "29e38a"
                            },
                            "period" : "Y",
                            "periodMultiplier" : 1,
                            "rollConvention" : "14"
                        },
                        "effectiveDate" : {
                            "adjustableDate" : {
                                "dateAdjustments" : {
                                    "businessDayConvention" : "NONE",
                                    "meta" : {
                                        "globalKey" : "4703fc8"
                                    }
                                },
                                "meta" : {
                                    "globalKey" : "593369fa"
                                },
                                "unadjustedDate" : "1994-12-14"
                            },
                            "meta" : {
                                "globalKey" : "593369fa"
                            }
                        },
                        "meta" : {
                            "globalKey" : "69249e88",
                            "externalKey" : "fixedCalcPeriodDates"
                        },
                        "terminationDate" : {
                            "adjustableDate" : {
                                "dateAdjustments" : {
                                    "businessCenters" : {
                                        "businessCentersReference" : {
                                            "globalReference" : "3deac93",
                                            "externalReference" : "primaryBusinessCenters"
                                        },
                                        "meta" : {
                                            "globalKey" : "0"
                                        }
                                    },
                                    "businessDayConvention" : "MODFOLLOWING",
                                    "meta" : {
                                        "globalKey" : "9125764f"
                                    }
                                },
                                "meta" : {
                                    "globalKey" : "6df2eedd"
                                },
                                "unadjustedDate" : "1999-12-14"
                            },
                            "meta" : {
                                "globalKey" : "6df2eedd"
                            }
                        }
                    },
                    "dayCountFraction" : {
                        "value" : "30E/360"
                    },
                    "meta" : {
                        "globalKey" : "1e9b3eb7"
                    },
                    "payerReceiver" : {
                        "payerPartyReference" : {
                            "globalReference" : "c6416b25",
                            "externalReference" : "party2"
                        },
                        "receiverPartyReference" : {
                            "globalReference" : "468059e0",
                            "externalReference" : "party1"
                        }
                    },
                    "paymentDates" : {
                        "meta" : {
                            "globalKey" : "434086bd"
                        },
                        "payRelativeTo" : "CALCULATION_PERIOD_END_DATE",
                        "paymentDatesAdjustments" : {
                            "businessCenters" : {
                                "businessCentersReference" : {
                                    "globalReference" : "3deac93",
                                    "externalReference" : "primaryBusinessCenters"
                                },
                                "meta" : {
                                    "globalKey" : "0"
                                }
                            },
                            "businessDayConvention" : "MODFOLLOWING",
                            "meta" : {
                                "globalKey" : "9125764f"
                            }
                        },
                        "paymentFrequency" : {
                            "meta" : {
                                "globalKey" : "14e38"
                            },
                            "period" : "Y",
                            "periodMultiplier" : 1
                        }
                    },
                    "quantity" : {
                        "notionalSchedule" : {
                            "meta" : {
                                "globalKey" : "1a115b3d"
                            },
                            "notionalStepSchedule" : {
                                "initialValue" : 50000000.00,
                                "meta" : {
                                    "globalKey" : "27fa7367"
                                },
                                "currency" : {
                                    "value" : "EUR",
                                    "meta" : {
                                        "scheme" : "http://www.fpml.org/coding-scheme/external/iso4217"
                                    }
                                }
                            }
                        }
                    },
                    "rateSpecification" : {
                        "fixedRate" : {
                            "initialValue" : 0.06,
                            "meta" : {
                                "globalKey" : "2ba0bfc"
                            }
                        }
                    }
                } ]
            },
            "rosettaKeyValue" : "15fd01cb"
        },
        "productIdentification" : {
            "productQualifier" : "InterestRate_IRSwap_FixedFloat_PlainVanilla"
        }
    },
    "meta" : {
        "globalKey" : "2bc99229"
    },
    "party" : [ {
        "meta" : {
            "globalKey" : "468059e0",
            "externalKey" : "party1"
        },
        "name" : {
            "value" : "Party A"
        },
        "partyId" : [ {
            "value" : "PARTYAUS33",
            "meta" : {
                "scheme" : "http://www.fpml.org/coding-scheme/external/iso9362"
            }
        } ]
    }, {
        "meta" : {
            "globalKey" : "c6416b25",
            "externalKey" : "party2"
        },
        "partyId" : [ {
            "value" : "BARCGB2L",
            "meta" : {
                "scheme" : "http://www.fpml.org/coding-scheme/external/iso9362"
            }
        } ]
    } ],
    "tradeDate" : {
        "date" : "1994-12-12",
        "meta" : {
            "globalKey" : "78c0e74"
        }
    }
};

export function extractByKey(obj, key) {     //Pull all values of specified key from nested JSON
    const arr = [];
    function extract(obj, arr, key) {
        //Recursively search for values of key in JSON tree
        if (obj instanceof Object) {
            let values = obj.values();
            for (let i = 0; i < keys.length; i++) {
                if (values[i] instanceof Object || values[i] instanceof Array) {
                    extract(values[i], arr, key);
                }
                else if (values[i] === key) {
                    arr.append(values[i]);
                }
            }
        }
        else if (obj instanceof Array) {
            for (let i = 0; i < obj.length; i++) {
                extract(obj[i], arr, key);
            }
        }
        return arr
    }
    return extract(obj, arr, key);
}
export const new_trade_fields = ['1', '2', '3','4','5','6','7','8','9','10', '11', '12']; //Add fields as needed

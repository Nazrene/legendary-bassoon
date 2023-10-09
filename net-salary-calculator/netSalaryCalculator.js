const PAYE_RATES_2023 = [
    { lowerLimit: 0, upperLimit: 24000, rate: 10 },
    { lowerLimit: 24001, upperLimit: 32333, rate: 25 },
    { lowerLimit: 32334, upperLimit: 500000, rate: 30 },
    { lowerLimit: 500001, upperLimit: 800000, rate: 32.5 },
    { lowerLimit: 800001, upperLimit: Infinity, rate: 35 },
  ];
  
    const NHIF_RATES = [
    { lowerLimit: 0, upperLimit: 5999, deduction: 150 },
  ];
  
  const NSSF_TIER_I_LIMIT = 6000;
  const NSSF_TIER_II_LIMIT = 18000;
  const NSSF_TIER_I_RATE = 0.06;
  const NSSF_TIER_II_RATE = 0.06;
  
  const HOUSING_LEVY_RATE = 0.015;
  
  function calculatePAYE(annualIncome) {
    let paye = 0;
    
    for (const rate of PAYE_RATES_2023) {
      if (annualIncome >= rate.lowerLimit && annualIncome <= rate.upperLimit) {
        paye = (annualIncome - rate.lowerLimit) * (rate.rate / 100);
        break;
      }
    }
    return paye;
  }
  
  function calculateNHIF(grossPay) {
    let nhifDeduction = 0;
    
    for (const rate of NHIF_RATES) {
      if (grossPay >= rate.lowerLimit && grossPay <= rate.upperLimit) {
        nhifDeduction = rate.deduction;
        break;
      }
    }
    return nhifDeduction;
  }
  
  function calculateNSSF(grossPay) {
    let nssfContribution = 0;
    
    if (grossPay <= NSSF_TIER_I_LIMIT) {
      nssfContribution = grossPay * NSSF_TIER_I_RATE;
    } else if (grossPay <= NSSF_TIER_II_LIMIT) {
      nssfContribution = NSSF_TIER_I_LIMIT * NSSF_TIER_I_RATE + (grossPay - NSSF_TIER_I_LIMIT) * NSSF_TIER_II_RATE;
    } else {
      nssfContribution = NSSF_TIER_I_LIMIT * NSSF_TIER_I_RATE + (NSSF_TIER_II_LIMIT - NSSF_TIER_I_LIMIT) * NSSF_TIER_II_RATE;
    }
    return nssfContribution;
  }

  function calculateHousingLevy(grossPay) {
    return grossPay * HOUSING_LEVY_RATE;
  }
  
  function calculateNetSalary(basicSalary, benefits) {
    const grossPay = basicSalary + benefits;
    const paye = calculatePAYE(grossPay);
    const nhifDeduction = calculateNHIF(grossPay);
    const nssfContribution = calculateNSSF(grossPay);
    const housingLevy = calculateHousingLevy(grossPay);
  
    const netSalary = grossPay - paye - nhifDeduction - nssfContribution - housingLevy;
  
    return netSalary;
  }
  
  const basicSalary = 60000; 
  const benefits = 10000; 
  const netSalary = calculateNetSalary(basicSalary, benefits);
  console.log(`Net Salary: Ksh ${netSalary.toFixed(2)}`);
  
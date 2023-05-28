// Writing a function calcTip that takes any bill value as an input and returns a corresponding tip.


function calculateTip(billvalue) {
    let tips;
    if (billvalue >= 80 && billvalue <= 300) {
    tips = billvalue * 0.15;
    } else {
    tips = billvalue * 0.2;
    }
    return tips;
    }

    const billvalue1 = 200;
    const billvalue2 = 350;
    const tips1 = calculateTip(billvalue1);
    const tips2 = calculateTip(billvalue2);

    console.log(`The bill was ${billvalue1}, the tip was ${tips1}, and the total value ${billvalue1 + tips1} `);
    console.log(`The bill was ${billvalue2}, the tip was ${tips2}, and the total value ${billvalue2 + tips2} `);

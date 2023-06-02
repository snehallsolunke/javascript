let sbiBank={
    bankName:"State Bank Of India",
    location:"Khandala",
    accountNo: 875633241138,
    ifscCode: "SBI0004108",
    interestRate: '6.00%',
    
    showDetails: function() {
    console.log(`bankName: ${this.bankName}, location: ${this.location}, accountNo: ${this.accountNo}, ifscCode: ${this.ifscCode}, interestRate: ${this.interestRate}`);
    }
};
    let axisBank  = { 
        bankName:"Axis Bank",
        location:"Pune",
        accountNo: 446657892427,
        ifscCode: "UTIB0000135",
        interestRate: '6.6%',
    
        showDetails: function() {
        console.log(
            `bankName: ${this.bankName}, location: ${this.location}, accountNo: ${this.accountNo}, ifscCode: ${this.ifscCode}, interestRate: ${this.interestRate}`
        );
    }
    };
    console.log(`=======================SBI Bank===========================`);
    sbiBank.showDetails();
    axisBank.showDetails();
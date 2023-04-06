let job = "Debeloper";
let salary = 0;

switch (job) {
    case "Maneger":
        salary = 8000;
        console.log(`My salary is ${salary}`);
        break;
        case "IT" || "Support":
            salary = 6000;
            console.log(`My salary is ${salary}`);
            break;
            case "Developer" || "Designer":
                salary = 7000;
                console.log(`My salary is ${salary}`);
                break;
                default:
                    salary = 4000;
                    console.log(`My salary is ${salary}`);
                    break;
}
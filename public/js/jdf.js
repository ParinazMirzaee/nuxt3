const g2j = (date, format = 'y-m-d', separator = '-') => {

    date = date.split(separator)
    let gy = parseInt(date[0])
    let gm = parseInt(date[1])
    let gd = parseInt(date[2])

    let g_d_m, jy, jm, jd, gy2, days;
    g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    gy2 = (gm > 2) ? (gy + 1) : gy;
    days = 355666 + (365 * gy) + ~~((gy2 + 3) / 4) - ~~((gy2 + 99) / 100) + ~~((gy2 + 399) / 400) + gd + g_d_m[gm - 1];
    jy = -1595 + (33 * ~~(days / 12053));
    days %= 12053;
    jy += 4 * ~~(days / 1461);
    days %= 1461;
    if (days > 365) {
        jy += ~~((days - 1) / 365);
        days = (days - 1) % 365;
    }
    if (days < 186) {
        jm = 1 + ~~(days / 31);
        jd = 1 + (days % 31);
    }
    else {
        jm = 7 + ~~((days - 186) / 30);
        jd = 1 + ((days - 186) % 30);
    }

    let M = ''
    switch (jm) {
        case 1:
            M = 'فروردین'
            break
        case 2:
            M = 'اردیبهشت'
            break
        case 3:
            M = 'خرداد'
            break
        case 4:
            M = 'تیر'
            break
        case 5:
            M = 'مرداد'
            break
        case 6:
            M = 'شهریور'
            break
        case 7:
            M = 'مهر'
            break
        case 8:
            M = 'آبان'
            break
        case 9:
            M = 'آذر'
            break
        case 10:
            M = 'دی'
            break
        case 11:
            M = 'بهمن'
            break
        case 12:
            M = 'اسفند'
            break
    }

    format = format.replace('y', jy)
    format = format.replace('m', jm)
    format = format.replace('d', jd)
    format = format.replace('M', M)
    return format
}

function j2g(date, format = 'y-m-d', separator = '-') {

    date = date.split(separator)
    let jy = parseInt(date[0])
    let jm = parseInt(date[1])
    let jd = parseInt(date[2])

    var sal_a, gy, gm, gd, days;
    jy += 1595;
    days = -355668 + (365 * jy) + (~~(jy / 33) * 8) + ~~(((jy % 33) + 3) / 4) + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
    gy = 400 * ~~(days / 146097);
    days %= 146097;
    if (days > 36524) {
        gy += 100 * ~~(--days / 36524);
        days %= 36524;
        if (days >= 365) days++;
    }
    gy += 4 * ~~(days / 1461);
    days %= 1461;
    if (days > 365) {
        gy += ~~((days - 1) / 365);
        days = (days - 1) % 365;
    }
    gd = days + 1;
    sal_a = [0, 31, ((gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];


    let M = ''
    switch (gm) {
        case 1:
            M = 'Jan'
            break
        case 2:
            M = 'Feb'
            break
        case 3:
            M = 'March'
            break
        case 4:
            M = 'April'
            break
        case 5:
            M = 'May'
            break
        case 6:
            M = 'June'
            break
        case 7:
            M = 'July'
            break
        case 8:
            M = 'Aug'
            break
        case 9:
            M = 'Sept'
            break
        case 10:
            M = 'Oct'
            break
        case 11:
            M = 'Nov'
            break
        case 12:
            M = 'Dec'
            break
    }


    format = format.replace('y', gy)
    format = format.replace('m', gm)
    format = format.replace('d', gd)
    format = format.replace('M', M)
    return format
}

const gregorian = (date, format = 'y-m-d', separator = '-') => {
    date = date.split('-')
    const y = parseInt(date[0])
    const m = parseInt(date[1])
    const d = parseInt(date[2])

    let M = ''
    switch (m) {
        case 1:
            M = 'Jan'
            break
        case 2:
            M = 'Feb'
            break
        case 3:
            M = 'March'
            break
        case 4:
            M = 'April'
            break
        case 5:
            M = 'May'
            break
        case 6:
            M = 'June'
            break
        case 7:
            M = 'July'
            break
        case 8:
            M = 'Aug'
            break
        case 9:
            M = 'Sept'
            break
        case 10:
            M = 'Oct'
            break
        case 11:
            M = 'Nov'
            break
        case 12:
            M = 'Dec'
            break
    }

    format = format.replace('y', y)
    format = format.replace('m', m)
    format = format.replace('d', d)
    format = format.replace('M', M)
    return format
}

export default {j2g, g2j, gregorian};
// একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে ।

function thirteen(table) {

    for (let i = 1; i <= 10; i++) {
        console.log(i * table);
    }

}
thirteen(13)
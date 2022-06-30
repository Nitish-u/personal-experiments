
arr = ["Ram", "Shyam", "Dev", "Hariom", "Shivam", "nitish", "naveen","hello"];
i = arr.length;
sub = i + 1;
left = i - 2;
function myfun() {
  switch (i) {
    case 0:
      document.write("No one likes this.");
      break;
    case 1:
      document.write(arr[0] + " " + "likes this.");
      break;
    case 2:
      document.write(arr[0] + " " + "and" + " " + arr[1] + " " + "likes this.");
      break;
    case i:
      document.write(
        arr[0] + "," + arr[1] + " " + "and" + " " + left + " " +"others likes this."
      );
      break;
  }
}
myfun()
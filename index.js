// Code your solution in this file!
function logDriverNames(ar) {
  ar.forEach(function (e){console.log(e.name);})
}

function logDriversByHometown(ar, ht) {
  ar.forEach(function (e) {if (e.hometown == ht) {
      console.log(e.name)}
  })
}

function driversByRevenue(arr) {
  const ar = arr.map(function(e){
    return e;
  });
  return ar.sort(function (a,b) {
    return a.revenue - b.revenue
  })
}

function driversByName(arr) {
  const ar = arr.map(function(e){
    return e;
  });
  return ar.sort(function (a,b) {
    return a.name.localeCompare(b.name);
  })
}

// function totalRevenue(ar) {
//   let tot = 0;
//   ar.forEach(function (e) {
//     tot += e.revenue;
//   })
//   return tot;
// }

function totalRevenue(ar) {
  return ar.reduce(function (ag, e) {
  return ag + e.revenue;
  }, 0)
  // return tot;
}

function averageRevenue(ar) {
  return totalRevenue(ar)/ar.length
}

export function HashMap() {
  const LOAD_FACTOR = 0.75;
  let capacity = 16;
  let hashMap = Array(capacity)
    .fill(null)
    .map(() => []);
  // Add methods here if needed

  function checkHighLoadFactor() {
    const mapLength = length();
    //load factor = # of entries / # of slots in array (capacity)
    return mapLength / capacity;
  }

  function loadFactorHandler() {
    if (checkHighLoadFactor() <= LOAD_FACTOR) {
      return;
    }
    capacity = capacity * 2;
    const oldMap = hashMap;
    hashMap = new Array(capacity).fill(null).map(() => []);
    oldMap.forEach((bucket) => {
      if (bucket !== null) {
        bucket.forEach(([key, value]) => {
          const index = hash(key);
          if (!hashMap[index]) {
            hashMap[index] = [];
          }
          hashMap[index].push([key, value]);
        });
      }
    });
    //hashMap = oldMap.concat();
  }

  function checkIndex(index) {
    if (index < 0 || index >= hashMap.length) {
      throw new Error("Trying to access index out of bounds");
    }
  }
  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }

    return hashCode;
  }

  function set(key, value) {
    const index = hash(key);
    checkIndex(index);
    const bucket = hashMap[index];

    if (!hashMap[index]) {
      hashMap[index] = [];
    }

    const collision = bucket.findIndex((element) => element[0] === key);
    console.log("collision: " + collision);
    if (collision === -1) {
      hashMap[index].push([key, value]);
    } else {
      hashMap[index][collision][1] = value;
    }
    if (checkHighLoadFactor) {
      loadFactorHandler();
    }
  }

  function get(key) {
    const index = hash(key);
    checkIndex(index);
    const bucket = hashMap[index];
    //if bucket is not empty, go to bucket
    if (bucket) {
      //compare if node's key is same value as that used for retrieval
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }
    return null;
  }

  function has(key) {
    const index = hash(key);
    checkIndex(index);
    const bucket = hashMap[index];
    if (bucket) {
      return bucket.findIndex((element) => element[0] === key) !== -1;
    }
    return false;
  }

  function remove(key) {
    const index = hash(key);
    checkIndex(index);
    const bucket = hashMap[index];
    if (!has(key)) {
      return false;
    } else {
      bucket.splice(index, 1);
    }
  }

  function length() {
    let count = 0;
    for (let i = 0; i < hashMap.length; i++) {
      if (hashMap[i] !== null) {
        count += hashMap[i].length;
      }
    }
    return count;
  }

  function clear() {
    hashMap.fill(null);
  }

  function keys() {
    let array = [];
    for (let i = 0; i < hashMap.length; i++) {
      if (hashMap[i] !== null) {
        hashMap[i].forEach((pair) => array.push(pair[0]));
      }
    }
    return array;
  }

  function values() {
    let array = [];
    for (let i = 0; i < hashMap.length; i++) {
      if (hashMap[i] !== null) {
        hashMap[i].forEach((pair) => array.push(pair[1]));
      }
    }
    return array;
  }

  function entries() {
    let array = [];
    for (let i = 0; i < hashMap.length; i++) {
      if (hashMap[i] !== null) {
        hashMap[i].forEach((pair) => array.push([pair[0], pair[1]]));
      }
    }
    return array;
  }

  return {
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
}

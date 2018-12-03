use std::str;
use std::fs::File;
use std::io::{BufReader, Read};

fn main() {
    let mut data = String::new();
    let f = File::open("input.txt").expect("Unable to open file");
    let mut br = BufReader::new(f);
    br.read_to_string(&mut data).expect("Unable to read string");
    let res: i32 = data.lines().map(|x| x.parse::<i32>().unwrap()).sum();
    println!("{:?}", res);
}

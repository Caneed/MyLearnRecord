
void main(){
  func(param1: true, param2: 23);
  assert(foo('123',1) == '123');
}

void func({bool? param1, num? param2}){
  print(param1);
}

String foo(String p1, num p2, [bool? p3]){
  return p1;
}
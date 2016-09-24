import 'package:logistic_app/model/user.dart';
import 'package:test/test.dart';

void main() {
  test('user-validations', () {
    User user = new User();
    user.email = "user@mail.com";
    expect(user.email, "user@mail.com");
  });
}

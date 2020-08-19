export class User {
  constructor(
    // private id?: String,
    private Firstname?: String,
    private Lastname?: String,
    private Identifiant?: String,
    private cin?: String,
    private phone?: String,
    private address?: String,
    private datenaissance?: String,
    private email?: String,
    private password?: String,
    private confirmpassword?: String,
    private state = "False",
    private role = "agent"
  ) {}
}

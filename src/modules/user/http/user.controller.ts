import { Controller } from "@nestjs/common";
import type { UserService } from "../domain/user.service";

@Controller("user")
export class UserController {
	constructor(private readonly userService: UserService) {}
}

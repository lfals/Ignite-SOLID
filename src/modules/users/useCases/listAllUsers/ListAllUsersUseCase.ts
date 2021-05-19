import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userFounded = this.usersRepository.findById(user_id);

    if (!userFounded) {
      throw new Error("User not found");
    }

    if (!userFounded.admin) {
      throw new Error("User is not Administrator");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };

import { UserRepositoriesMongoDB } from "modules/Users/repositories/implementations/UserRepositoriesMongoDB";
import { IUserRepositories } from "modules/Users/repositories/IUserRepositories";
import { IAuthRepositories } from "modules/Auth/repositories/IAuthRepositories";
import { container } from "tsyringe";
import { AuthRepositoriesMongoDB } from "modules/Auth/repositories/implementations/AuthRepositories";
import { ICategoryRepositories } from "modules/Categories/repositories/ICategoryRepositories";
import { CategoryRepositoriesMongoDB } from "modules/Categories/repositories/implementations/CategoryRepositoriesMongoDB";

container.registerSingleton<IUserRepositories>(
    "UserRepositories",
    UserRepositoriesMongoDB
)

container.registerSingleton<IAuthRepositories>(
    "AuthRepositories",
    AuthRepositoriesMongoDB
)

container.registerSingleton<ICategoryRepositories>(
    "CategoryRepositories",
    CategoryRepositoriesMongoDB
)
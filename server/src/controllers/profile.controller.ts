import { Body, Get, JsonController, Param, Put } from 'routing-controllers';
import { IUser, User } from '../models/user.model';

@JsonController('/profile')
export class ProfileController {

  @Get('/:email')
  public async getProfileByEmail(@Param('email') email: string) {
    const user = await User.findOne({ email });
    if (user) {
      return user.toJSON();
    }
  }

  @Put('/')
  public async updateProfile(@Body() userInfo: IUser) {
    let user = await User.findOneAndUpdate({ email: userInfo.email }, {
      $set: {
        name: userInfo.name,
        picture: userInfo.picture
      }
    });
    if (!user) {
      user = new User(userInfo);
      await user.save();
    }
    return user.toJSON();
  }

}

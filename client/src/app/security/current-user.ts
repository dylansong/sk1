/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://beta.skaffolder.com/#!/register?friend=5b5c86fa6ef184060dd13312
*
* You will get 10% discount for each one of your friends
* 
*/
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/domain/manage_film_example_db/user';
import * as _ from 'lodash';

/**
 * Store the current user
 */
class CurrentUser {
    private currentUserSubject = new BehaviorSubject(null);
    public currentUser$: Observable<User> = this.currentUserSubject.asObservable();

    setUser(user: User) {
        this.currentUserSubject.next(_.cloneDeep(user));
    }
}

export const store = new CurrentUser();

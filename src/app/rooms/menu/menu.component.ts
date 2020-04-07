import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu-service/menu.service';
import { Player } from '../../interfaces/player.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'doc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  player: Player = {
    username: '',
    isReady: false,
    iconTitle: '../../../../assets/user-icons/male.png'
  };
  playersInRoom = 5;
  isJoining: boolean;
  constructor(
    readonly menu: MenuService,
    private readonly router: Router
    ) { }

  ngOnInit(): void {
    this.menu.land();
    this.initUser();
  }
  joinGame(): void {
    this.isJoining = true;
    this.menu.login(this.player);
  }
  private initUser() {
    this.player = {
      username: '',
      uniqueId: JSON.parse(sessionStorage.getItem('userId')),
      isReady: false,
      iconTitle: 'male'
    };
  }
}
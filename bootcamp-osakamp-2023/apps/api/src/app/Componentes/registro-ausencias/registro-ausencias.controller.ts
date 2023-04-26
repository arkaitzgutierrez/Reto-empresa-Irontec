import { Body, Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RegistroAusenciasService } from './registro-ausencias.service';

@Controller('registro-ausencias')
export class RegistroAusenciasController {
    constructor(private readonly registroService:RegistroAusenciasService){}

    @UseGuards(AuthGuard('jwt'))
    @Get('dia')
    async getone( @Req() req:any , @Query('date') date:string):Promise<any>{
        console.log(date)
        console.log(req.body)
        return await this.registroService.getUnRegistro(req.user.userID,date)
    }
    @UseGuards(AuthGuard('jwt'))
    @Get('mes')
    async getmes( @Req() req:any , @Query('date') date:string):Promise<any>{
        console.log(date)
        console.log(req.body)
        return await this.registroService.getelmes(req.user.userID,date)
    }
    @UseGuards(AuthGuard('jwt'))
    @Get('year')
    async getyear( @Req() req:any , @Query('date') date:string):Promise<any>{
        console.log(date)
        console.log(req.body)
        return await this.registroService.getelyear(req.user.userID,date)
    }


    @Post()
    async postuno(@Body() body:any):Promise<any>{
        await this.registroService.postuno(body)
        return {message:`Se ha registrado el registro ${body.registroId}`}
    }
}

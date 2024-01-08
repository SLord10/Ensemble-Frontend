import {Component} from "@angular/core";
import {NgClass} from "@angular/common";

@Component({
    standalone: true,
    selector: 'app-info',
    imports: [
        NgClass
    ],
    template: `
        <section class="section section-lg">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-md-2">
                        <img src="./assets/img/theme/aid.jpg" class="img-fluid floating">
                    </div>
                    <div class="col-md-6 order-md-1">
                        <div class="pr-md-5">
                            <div class="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                                <i class="fa fa-question-circle" aria-hidden="true"></i>
                            </div>
                            <h3>Why Ensemble?</h3>
                            <p>Join Ensemble in making a difference during times of natural catastrophes. Your donation
                                doesn't just contribute; it places you among the compassionate individuals who have
                                helped shape positive change. Consider the impact your support can have:</p>
                            <ul class="list-unstyled mt-5">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <div>
                                            <div class="badge badge-circle badge-success mr-3">
                                                <i class="fa fa-life-ring" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 class="mb-0"><b> Lifesaving Impact:</b> Together, we've made a
                                                difference in the lives of many affected by natural catastrophes. Your
                                                donation aids in providing essential resources, emergency relief, and
                                                rebuilding efforts.</h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <div>
                                            <div class="badge badge-circle badge-success mr-3">
                                                <i class="ni ni-satisfied"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 class="mb-0"><b>Immediate Relief: </b> Ensemble is committed to
                                                delivering swift assistance in times of crisis. Your contribution
                                                ensures that affected communities receive the urgent support they need,
                                                such as shelter, food, and medical aid.</h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <div>
                                            <div class="badge badge-circle badge-success mr-3">
                                                <i class="fa fa-handshake-o" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 class="mb-0"><b>Community Resilience: </b> With your help, Ensemble
                                                works towards building resilient communities that can better withstand
                                                and recover from the impacts of natural disasters. We invest in
                                                sustainable solutions for long-term recovery and preparedness.</h6>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="section bg-secondary">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6">
                        <div class="card col-md-15 bg-default shadow border-0">
                            <img src="./assets/img/theme/aid2.jpg" class="card-img-top">
                            <blockquote class="card-blockquote">
                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                                     class="svg-bg">
                                    <polygon points="0,52 583,95 0,95" class="fill-default"/>
                                    <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default"/>
                                </svg>

                                <h4 class="display-3 font-weight-bold text-white">For every individual </h4>
                                <p class="lead text-italic text-white">affected by natural catastrophes in Morocco,
                                    Ensemble commits to delivering impactful results. At Ensemble, our dedicated efforts
                                    are focused on the well-being of every person, every day, throughout Morocco.</p>
                            </blockquote>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="pl-md-5 ml-5">
                            <div class="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                                <i class="fa fa-flag" aria-hidden="true"></i>
                            </div>
                            <h3>We are Ensemble, </h3>
                            <p class="lead">dedicated to the well-being of every individual in Morocco. Our resolve is
                                unwavering, and we continuously work towards making a lasting difference in the lives of
                                those affected by natural catastrophes. Together, let's build a future where everyone in
                                Morocco can thrive.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="section section-lg">
            <div class="container">
                <div class="row justify-content-center text-center mb-lg">
                    <div class="col-lg-8">
                        <h2 class="display-3">Your donations help save children across the country</h2>
                        <p class="lead text-muted">Help Ensemble reach more people in need</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img src="./assets/img/theme/aid3.jpg"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">

                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img src="./assets/img/theme/aid4.jpg"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">

                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img src="./assets/img/theme/aid5.jpg"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">

                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img src="./assets/img/theme/aid6.png"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section section-lg bg-gradient-default">
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <!-- SVG separator -->
            <div class="separator separator-bottom separator-skew zindex-100">
                <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
                     xmlns="http://www.w3.org/2000/svg">
                    <polygon class="fill-white" points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
        </section>
        <section class="section section-lg pt-lg-0 section-contact-us">
            <div class="container">
                <div class="row justify-content-center mt--300">
                    <div class="col-lg-8">
                        <div class="card bg-gradient-secondary shadow">
                            <div class="card-body p-lg-5">
                                <h4 class="mb-1">Want to work with us?</h4>
                                <p class="mt-0">Your help is very important to us.</p>
                                <div class="form-group mt-5" [ngClass]="{'focused':focus===true}">
                                    <div class="input-group input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="ni ni-user-run"></i></span>
                                        </div>
                                        <input class="form-control" placeholder="Your name" type="text"
                                               (focus)="focus=true" (blur)="focus=false">
                                    </div>
                                </div>
                                <div class="form-group" [ngClass]="{'focused':focus1===true}">
                                    <div class="input-group input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                        </div>
                                        <input class="form-control" placeholder="Email address" type="email"
                                               (focus)="focus1=true" (blur)="focus1=false">
                                    </div>
                                </div>
                                <div class="form-group mb-4">
                                    <textarea class="form-control form-control-alternative" name="name" rows="4"
                                              cols="80" placeholder="Type a message..."></textarea>
                                </div>
                                <div>
                                    <button type="button" class="btn btn-default btn-round btn-block btn-lg">Send
                                        Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
})
export class InfoComponent{
    focus: any;
    focus1: any;
}

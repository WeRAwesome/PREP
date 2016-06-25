import React from 'react';

class SectionOne extends React.Component {
  componentDidMount() {
    $(window).resize(function() {
      //update stuff
    });

    //Change pos/background/padding/add shadow on nav when scroll event happens
    $(function(){
    	var navbar = $('.globalnav');

    	$(window).scroll(function(){
    		if($(window).scrollTop() <= 40){
    			globalnav.removeClass('globalnav-scroll');
    			$('.top').hide();
    		} else {
    			globalnav.addClass('globalnav-scroll');
    			$('.top').show();
    		}
    	});
    	$('.globalnav-toggle').click(function(){
    		if($(window).scrollTop() <= 40){
    		   globalnav.addClass('globalnav-scroll');
    	    }
    	});
    });


    //Close collapse nav when scroll spy page link is clicked
    $('.globalnav-nav a[href*="#spy"]').click(function(){
    	$('.navbar-collapse').collapse('hide');
    	if($(window).scrollTop() <= 40){
    	   $('.globalnav').removeClass('globalnav-scroll');
    	}
    });


    //Get height of col next to img col and apply a fixed height for flexbox to work correctly.
    $(function(){
    	var flexColHeight = $('.to-match').height();
    	var flexCol = $('.css-img-wrapper');

    	flexCol.css('height', flexColHeight);
    });


    //Smooth Scrolling For Internal Page Links
    $(function() {
      $('a[href*=#spy]:not([href=#])').click(function() {
    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    	  var target = $(this.hash);
    	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    	  if (target.length) {
    		$('div').animate({
    		  scrollTop: target.offset().top
    		}, 1000);
    		return false;
    	  }
    	}
      });
    });
  }

  render(){
    return (
      <section className='cover' id='spytop'>
        <div className='prep-jumbotron'>
          <img className='cover' src='../app/images/Home/PREP1_shape.png' />
          <img className='cover animated fadeInRightBig' src='../app/images/Home/PREP1_subtitlered.png' />
          <img className='animated fadeInDownBig' src='../app/images/Home/PREP1_heading.png' />
        </div>
      </section>
    )
  }
}

export default SectionOne;

$(function() {


	function play(name) {
		var pathToVideo = 'videos/' + name + '.mp4';

		var htmlTagToAdd = '<video src="' + pathToVideo + '" controls autoplay ></video>';

		//remove actual tag
		$('#video').empty();
		//add new tag with new video
		$('#video').append($(htmlTagToAdd));

	}


	function update(name, options) {
		//play video
		play(name);
		//update options
		for (var x in options.videos) {
			var video = options.videos[x];
			if (video.name == name) {
				$('#videoOptions').empty(); //clears options
				var $ul = $('<ul/>');
				for (var y in video.options) {
					var optionName = video.options[y];
					var li = '<li><a  class="play" videoName="' + optionName + '">' +
						optionName + '</a></li>';
					$ul.append($(li));
				}
				$ul.appendTo('#videoOptions');
				break;
			} else {
				continue;
			}
		}

		$('.play').on('click', function() {
			var videoName = $(this).attr('videoName');
			//play(videoName);
			update(videoName, options);
			console.info('playing ' + videoName);

			if (videoName == 'paki') {
				setTimeout(function() {
					alert(
						"Well played! \n\n Now you can check the source files my github accout." +
						"\n\n https://github.com/Quadramma/html-interactivevideo " +
						"\n\n tip: You can grab/copy the link if you open the browser console. Start hacking right now!"
					);
					console.info('https://github.com/Quadramma/html-interactivevideo');
				}, 2000);
			}

		});
	}

	function createInteractiveVideo(options) {
		//DOM video holder id 'video'
		//DOM options holder id 'videoOptions'
		update(options.defaultVideo, options);
	}



	createInteractiveVideo({
		videos: [{
			name: 'paki',
			options: ['paki']
		}, {
			name: 'autito',
			options: ['earth', 'paki']
		}, {
			name: 'blackberry',
			options: ['autito', 'earth']
		}, {
			name: 'earth',
			options: ['blackberry']
		}],
		defaultVideo: 'earth'
	})

});
// 页面加载完成后的动画效果
document.addEventListener('DOMContentLoaded', function() {
    // 添加开屏动画点击事件
    const splashScreen = document.querySelector('.splash-screen');
    if (splashScreen) {
        splashScreen.addEventListener('click', function() {
            // 添加淡出类
            splashScreen.classList.add('fade-out');
            console.log('点击开屏动画，进入主界面！');
            
            // 动画结束后执行的逻辑
            setTimeout(function() {
                // 这里可以添加进入主界面后的额外逻辑
            }, 1000); // 与淡出动画持续时间一致
        });
    }
    // 视频播放相关代码
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');
    const video3 = document.getElementById('video3');
    const video4 = document.getElementById('video4');
    let currentVideo = video1;
    
    // 确保第一个视频显示并尝试播放
    video1.style.display = 'block';
    video1.play().catch(error => {
        console.log('自动播放失败:', error);
        // 如果自动播放失败，至少确保视频元素显示
        video1.style.display = 'block';
    });
    
    // 确保其他视频初始隐藏
    video2.style.display = 'none';
    video3.style.display = 'none';
    video4.style.display = 'none';
    
    // 添加用户交互监听，交互后取消静音
    function handleUserInteraction(e) {
        video1.muted = false;
        video2.muted = false;
        video3.muted = false;
        video4.muted = false;
        console.log('用户交互后取消静音');
        // 移除事件监听
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
    }
    
    // 添加多种交互事件监听
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);
    // 只在非箭头键按下时触发静音取消
    document.addEventListener('keydown', function(e) {
        // 不是左右箭头键时才触发静音取消
        if (e.keyCode !== 37 && e.keyCode !== 39) {
            handleUserInteraction(e);
        }
    });
    
    // 视频轮播逻辑
    function setupVideoCarousel() {
        // 第一个视频结束时播放第二个
        video1.addEventListener('ended', function() {
            video1.style.display = 'none';
            video2.style.display = 'block';
            video2.play().catch(error => {
                console.log('播放第二个视频失败:', error);
            });
            currentVideo = video2;
        });
        
        // 第二个视频结束时播放第三个
        video2.addEventListener('ended', function() {
            video2.style.display = 'none';
            video3.style.display = 'block';
            video3.play().catch(error => {
                console.log('播放第三个视频失败:', error);
            });
            currentVideo = video3;
        });
        
        // 第三个视频结束时播放第四个
        video3.addEventListener('ended', function() {
            video3.style.display = 'none';
            video4.style.display = 'block';
            video4.play().catch(error => {
                console.log('播放第四个视频失败:', error);
            });
            currentVideo = video4;
        });
        
        // 第四个视频结束时播放第一个
        video4.addEventListener('ended', function() {
            video4.style.display = 'none';
            video1.style.display = 'block';
            video1.play().catch(error => {
                console.log('播放第一个视频失败:', error);
            });
            currentVideo = video1;
        });
    }
    
    // 视频切换函数
    function switchVideo(direction) {
        // 确定下一个要播放的视频
        let nextVideo;
        if (direction === 'next') {
            if (currentVideo === video1) nextVideo = video2;
            else if (currentVideo === video2) nextVideo = video3;
            else if (currentVideo === video3) nextVideo = video4;
            else if (currentVideo === video4) nextVideo = video1;
        } else if (direction === 'prev') {
            if (currentVideo === video1) nextVideo = video4;
            else if (currentVideo === video2) nextVideo = video1;
            else if (currentVideo === video3) nextVideo = video2;
            else if (currentVideo === video4) nextVideo = video3;
        }
        
        // 重置当前视频
        if (currentVideo) {
            currentVideo.pause();
            currentVideo.currentTime = 0; // 重置视频时间
            currentVideo.style.display = 'none';
        }
        
        // 显示并播放下一个视频
        nextVideo.style.display = 'block';
        // 尝试播放视频，优雅处理错误
        nextVideo.play().catch(error => {
            // 忽略AbortError错误，因为这是正常的中断
            if (error.name !== 'AbortError') {
                console.log('播放视频失败:', error);
            }
        });
        currentVideo = nextVideo;
        console.log('视频切换到:', currentVideo.id);
    }
    
    // 添加键盘事件监听
    document.addEventListener('keydown', function(e) {
        // 左箭头键 (37) 切换到上一个视频
        if (e.keyCode === 37) {
            switchVideo('prev');
        }
        // 右箭头键 (39) 切换到下一个视频
        else if (e.keyCode === 39) {
            switchVideo('next');
        }
    });
    
    // 添加按钮点击事件监听
    document.getElementById('prevBtn').addEventListener('click', function() {
        switchVideo('prev');
    });
    document.getElementById('nextBtn').addEventListener('click', function() {
        switchVideo('next');
    });
    
    // 初始化视频轮播
    setupVideoCarousel();
    
    // 弹窗相关代码
    // 获取按钮元素
    const btn = document.querySelector('.btn');
    
    // 获取弹窗元素
    const loveModal = document.getElementById('loveModal');
    const closeModal = document.getElementById('closeModal');
    
    // 为按钮添加点击效果
    btn.addEventListener('click', function() {
        // 显示自定义弹窗
        loveModal.style.display = 'flex';
    });
    
    // 为关闭按钮添加点击事件
    closeModal.addEventListener('click', function() {
        loveModal.style.display = 'none';
    });
    
    // 点击弹窗外部关闭
    loveModal.addEventListener('click', function(e) {
        if (e.target === loveModal) {
            loveModal.style.display = 'none';
        }
    });
    
    // 按ESC键关闭弹窗
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && loveModal.style.display === 'flex') {
            loveModal.style.display = 'none';
        }
    });
});

// 创建樱花飘散效果
function createSakura(x, y) {
    const sakura = document.createElement('div');
    sakura.className = 'sakura-petal';
    sakura.textContent = '🌸';
    
    // 设置初始位置（基于点击位置）
    sakura.style.left = `${x}px`;
    sakura.style.top = `${y}px`;
    
    // 随机设置动画参数，实现向四面八方飘散
    const duration = 2 + Math.random() * 3;
    const translateX = (Math.random() - 0.5) * 400; // 水平方向随机偏移
    const translateY = (Math.random() - 0.5) * 400; // 垂直方向随机偏移
    const rotate = Math.random() * 720; // 随机旋转角度
    const scale = 0.5 + Math.random() * 1; // 随机缩放
    
    // 设置动画属性
    sakura.style.animationDuration = `${duration}s`;
    sakura.style.setProperty('--translateX', `${translateX}px`);
    sakura.style.setProperty('--translateY', `${translateY}px`);
    sakura.style.setProperty('--rotate', `${rotate}deg`);
    sakura.style.setProperty('--scale', `${scale}`);
    
    // 添加到页面
    document.body.appendChild(sakura);
    
    // 动画结束后移除元素
    setTimeout(() => {
        if (sakura.parentNode) {
            sakura.parentNode.removeChild(sakura);
        }
    }, duration * 1000);
}

// 点击页面时触发樱花飘散
document.addEventListener('click', function(e) {
    // 每次点击生成15-20个樱花
    const petalCount = 15 + Math.floor(Math.random() * 6);
    for (let i = 0; i < petalCount; i++) {
        // 在点击位置生成樱花
        createSakura(e.clientX, e.clientY);
    }
});
var num = 1;
        // 对表单进行初始赋值
        $('#exampleInputAmount').val(num);
        // 点击添加时
        function add() {
            // 方法体
            if (num >= 5) {
                alert('最多可添加5个');
                return;
            }
            num++;
            console.log(num);
            $('#exampleInputAmount').val(num);
        }
        // 点击删除时
        function minus() {
            if (num < 1) {
                alert('已减到最低了');
                return;
            }
            num--;
            console.log(num);
            $('#exampleInputAmount').val(num);
        }
